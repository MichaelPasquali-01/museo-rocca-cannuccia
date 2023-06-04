import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DettagliOperaPageRoutingModule } from './dettagli-opera-routing.module';

import { DettagliOperaPage } from './dettagli-opera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DettagliOperaPageRoutingModule
  ],
  declarations: [DettagliOperaPage]
})
export class DettagliOperaPageModule {}
