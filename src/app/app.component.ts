import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Platform} from "@ionic/angular";
import { SplashScreen } from '@capacitor/splash-screen';

import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  isSupported = false;

  constructor(private router: Router, private platform: Platform) {
    SplashScreen.hide().catch((error: any) => {
      console.warn(error);
    });
  }

  ngOnInit() {
    BarcodeScanner.isSupported().then((result) => {
      this.isSupported = result.supported;
    });
  }

  async scan(): Promise<void> {
    const granted = await this.requestPermissions();
    if (!granted) {
      return;
    }
    const { barcodes } = await BarcodeScanner.scan();
    
    this.router.navigate(['./dettagli-opera/' + barcodes[0].displayValue]);
  }

  async requestPermissions(): Promise<boolean> {
    const { camera } = await BarcodeScanner.requestPermissions();
    return camera === 'granted' || camera === 'limited';
  }
}
