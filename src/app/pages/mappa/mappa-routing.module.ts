import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MappaPage } from './mappa-page.component';

const routes: Routes = [
  {
    path: '',
    component: MappaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MappaRoutingModule {}
