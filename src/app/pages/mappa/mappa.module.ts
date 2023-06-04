import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MappaRoutingModule } from './mappa-routing.module';

import { Mappa } from './mappa';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MappaRoutingModule
  ],
  declarations: [Mappa]
})
export class MappaModule {}
