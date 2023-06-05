import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { GuestbookFormPageRoutingModule } from '../guestbook-form/guestbook-form-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    GuestbookFormPageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
