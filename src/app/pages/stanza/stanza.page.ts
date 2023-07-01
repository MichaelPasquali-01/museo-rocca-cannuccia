import { Component} from '@angular/core';
import { StanzaService } from 'src/app/services/stanza/stanza.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stanza',
  templateUrl: './stanza.page.html',
  styleUrls: ['./stanza.page.scss'],
})
export class StanzaPage {
  id: number = 0;
  stanza: string = "";
  opere:any[] = []
  
  constructor(private stanzaService: StanzaService, private route: ActivatedRoute) { 
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  ionViewWillEnter() {
    this.stanzaService.getStanza(this.id).subscribe((res:any) => {
      res.stanze.forEach((room:any) => {
        if (room.id === this.id) this.stanza = room.nome;
      });
    });

    this.opere = [];

    this.stanzaService.getOpere().subscribe((res:any) => {
      res.opere.forEach((opera:any) => {
        if (opera.idstanza === this.id) this.opere.push(opera);
      });
    }); 
  }
}
