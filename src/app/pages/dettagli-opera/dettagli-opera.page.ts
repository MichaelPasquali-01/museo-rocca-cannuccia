import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OperaService } from 'src/app/services/opera/opera.service';

@Component({
  selector: 'app-dettagli-opera',
  templateUrl: './dettagli-opera.page.html',
  styleUrls: ['./dettagli-opera.page.scss'],
})
export class DettagliOperaPage implements OnInit {
  id:number|null;
  status:number = 0;
  opera:any;
  artisti:any[] = []

  constructor(private route: ActivatedRoute, private operaService: OperaService) { 
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() { }

  ionViewWillEnter() {
    this.artisti = []

    this.operaService.getDettagliOpera(this.id).subscribe((res:any) => {
      this.status = res.status;
      this.opera = res.opera;
      this.opera.data = new Date(res.opera.data).getFullYear();

      res.opera.idautori.forEach((autore: number) => {
        this.operaService.getAutoriOpera(autore).subscribe((art:any) => {
          this.artisti.push({id: autore, nome: art.artista.nome});
        })
      });
    });
  }
}
