import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {BarcodeScanner} from '@capacitor-community/barcode-scanner';
import {AlertController} from "@ionic/angular";
@Component({
  selector: 'app-scansione',
  templateUrl: './scansione.page.html',
  styleUrls: ['./scansione.page.scss'],
})
export class ScansionePage implements AfterViewInit, OnDestroy{
  result = null;
  scanActive = false;
  constructor(private alertController: AlertController) { }

  ngAfterViewInit() {
    BarcodeScanner.prepare();
  }

  ngOnDestroy() {
    BarcodeScanner.stopScan();
  }

  async startScanner() {
    const allowed = await this.checkPermission();
    if(allowed) {
      const result = await BarcodeScanner.startScan();
      if(result.hasContent) {
        // @ts-ignore
        this.result = result.content;
        this.scanActive = false;
      }
    }
  }

  async checkPermission() {
    return new Promise(async(resolve,reject) => {
      const status = await BarcodeScanner.checkPermission({force: true});
      if(status.granted){
        resolve(true);
      } else if(status.denied) {
        const alert = await this.alertController.create({
          header: 'Nessun permesso',
          message: "Consenti l'utilizzo della fotocamera nelle impostazioni",
          buttons: [{
            text: 'No',
            role: 'cancel'
          },
            {
              text: 'Impostazioni',
              handler: () => {
                resolve(false);
                BarcodeScanner.openAppSettings();
              }
            }]
        });

        await alert.present();

      } else {
        resolve(false);
      }
    });
  }
  stopScanner() {
    BarcodeScanner.stopScan();
    this.scanActive = false;
  }
}
