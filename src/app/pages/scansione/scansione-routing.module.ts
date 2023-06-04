import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScansionePage } from './scansione.page';

const routes: Routes = [
  {
    path: '',
    component: ScansionePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScansionePageRoutingModule {}
