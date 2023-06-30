import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistaService } from 'src/app/services/artista/artista.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista-page.component.html',
  styleUrls: ['./artista-page.component.scss'],
})
export class ArtistaPage  {
  id:number|null;
  status:number = 0;
  artista:any;

  constructor(private route: ActivatedRoute, private artistaService: ArtistaService) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  ionViewWillEnter() {
    this.artistaService.getDettagliArtista(this.id).subscribe((res:any) => {
      this.status = res.status;
      this.artista = res.artista;
      const date = new Date(res.artista.data);
      this.artista.data = `${`0${date.getDate()}`.slice(-2)}/${`0${date.getMonth()}`.slice(-2)}/${date.getFullYear()}`;
    });
  }


}
