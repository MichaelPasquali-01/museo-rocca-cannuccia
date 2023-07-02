import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {call} from "ionicons/icons";
import {Browser} from "@capacitor/browser";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  openFacebookPage() {
    Browser.open({ url: 'https://www.facebook.com' });
  }

  openTwitterPage() {
    Browser.open({url: 'https://www.twitter.com'});
  }

  openInstagramPage() {
    Browser.open({url: 'https://www.instagram.com'});
  }

  openMail() {
    Browser.open({
      url: `mailto:destinatario@example.com?subject=${encodeURIComponent('Soggetto del messaggio')}&body=${encodeURIComponent('Corpo del messaggio')}`,
    });
  }

    protected readonly call = call;
}
