import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuestbookFormPageRoutingModule } from './guestbook-form-routing.module';

import { GuestbookFormPage } from './guestbook-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuestbookFormPageRoutingModule
  ],
  declarations: [GuestbookFormPage]
})
export class GuestbookFormPageModule {}
