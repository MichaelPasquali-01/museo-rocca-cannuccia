import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DettagliOperaPage } from './dettagli-opera.page';

const routes: Routes = [
  {
    path: '',
    component: DettagliOperaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DettagliOperaPageRoutingModule {}
