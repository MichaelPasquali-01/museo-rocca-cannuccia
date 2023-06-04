import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mappa } from './mappa';

const routes: Routes = [
  {
    path: '',
    component: Mappa
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MappaRoutingModule {}
