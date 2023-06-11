import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {BarcodeScanner} from "@ionic-native/barcode-scanner/ngx";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private barcodeScanner: BarcodeScanner, private router: Router) {}

  scan() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.router.navigate([`/dettagli-opera/${barcodeData.text}`]);
    }).catch(err =>{
      console.log('Error', err);
    });
  }
}
