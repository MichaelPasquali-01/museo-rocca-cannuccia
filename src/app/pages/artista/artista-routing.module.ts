import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtistaPage } from './artista-page.component';

const routes: Routes = [
  {
    path: '',
    component: ArtistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtistaRoutingModule {}
