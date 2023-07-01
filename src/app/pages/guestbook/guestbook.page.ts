import { Component, OnInit } from '@angular/core';
import { GuestbookService } from 'src/app/services/guestbook/guestbook.service';

@Component({
  selector: 'app-guestbook',
  templateUrl: './guestbook.page.html',
  styleUrls: ['./guestbook.page.scss'],
})
export class GuestbookPage implements OnInit {
  recensioni: any[] = [];

  constructor(private guestbookService: GuestbookService) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.guestbookService.getRecensioni().subscribe((res:any) => {
      this.recensioni = res;
    });
  }
}
