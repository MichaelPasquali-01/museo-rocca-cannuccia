import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import {DettagliOpera} from './dettagli.opera';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
    ],
    declarations: [DettagliOpera]
  })

export class DettagliOperaModule {}
