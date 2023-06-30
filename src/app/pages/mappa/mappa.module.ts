import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MappaRoutingModule } from './mappa-routing.module';

import { MappaPage } from './mappa-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MappaRoutingModule
  ],
  declarations: [MappaPage]
})
export class MappaModule {}
