import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Mappa} from "./mappa";

const routes: Routes = [
  {
    path: 'mappa',
    component: Mappa,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MappaRoutingModule {}
