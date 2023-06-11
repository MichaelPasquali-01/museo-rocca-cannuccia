import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StanzaPage } from './stanza.page';

const routes: Routes = [
  {
    path: '',
    component: StanzaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StanzaPageRoutingModule {}
