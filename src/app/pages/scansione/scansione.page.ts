import { Component, OnInit } from '@angular/core';
import {BarcodeScanner} from "@awesome-cordova-plugins/barcode-scanner/ngx";

@Component({
  selector: 'app-scansione',
  templateUrl: './scansione.page.html',
  styleUrls: ['./scansione.page.scss'],
})
export class ScansionePage implements OnInit {

  constructor(
    private barcodeScanner: BarcodeScanner
  ) { }
  ngOnInit() {

    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
    }).catch(err => {
      console.log('Error', err);
    });
  }

}
