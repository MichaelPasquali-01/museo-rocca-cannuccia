import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuestbookFormPage } from './guestbook-form.page';

const routes: Routes = [
  {
    path: '',
    component: GuestbookFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuestbookFormPageRoutingModule {}
