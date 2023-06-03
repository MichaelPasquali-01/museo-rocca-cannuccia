import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import {Mappa} from "./mappa";
import {MappaRoutingModule} from "./mappa-routing.module";

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
