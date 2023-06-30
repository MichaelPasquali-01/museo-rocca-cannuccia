import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtistaRoutingModule } from './artista-routing.module';

import { ArtistaPage } from './artista-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtistaRoutingModule
  ],
  declarations: [ArtistaPage]
})
export class ArtistaModule {}
