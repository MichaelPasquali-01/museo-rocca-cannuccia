import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScansionePageRoutingModule } from './scansione-routing.module';

import { ScansionePage } from './scansione.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScansionePageRoutingModule
  ],
  declarations: [ScansionePage]
})
export class ScansionePageModule {}
