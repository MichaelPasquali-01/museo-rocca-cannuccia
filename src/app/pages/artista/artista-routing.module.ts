import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Artista } from './artista';

const routes: Routes = [
  {
    path: '',
    component: Artista
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtistaRoutingModule {}
