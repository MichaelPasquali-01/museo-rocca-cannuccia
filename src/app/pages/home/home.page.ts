import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {call} from "ionicons/icons";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {
  }

  navigateToGuestbookForm() {
    this.router.navigate(['/guestbook-form']);

  }

    protected readonly call = call;
}
