import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtistaRoutingModule } from './artista-routing.module';

import { Artista } from './artista';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtistaRoutingModule
  ],
  declarations: [Artista]
})
export class ArtistaModule {}
