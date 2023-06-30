import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { OperaService } from 'src/app/services/opera/opera.service';

@Component({
  selector: 'app-dettagli-opera',
  templateUrl: './dettagli-opera.page.html',
  styleUrls: ['./dettagli-opera.page.scss'],
})
export class DettagliOperaPage  {
  id:number|null;
  status:number = 0;
  opera:any;
  artisti:any[] = []
  isFavorite:boolean = false;

  constructor(private route: ActivatedRoute, private operaService: OperaService,
    private nativeStorage: NativeStorage) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.nativeStorage.getItem('favorites').then(
      data => this.isFavorite = this.id !== null && data[this.id] !== undefined ? true : false,
      error => console.log(error)
    );
  }



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

  async aggiungiPreferiti() {
    let favorite:any = await this.nativeStorage.getItem('favorites').then(
      data => data,
      error => {}
    );

    favorite = favorite === undefined ? {} : favorite;

    console.log(favorite);

    if (this.id !== null) {
      if (!(this.id in favorite)) {
        favorite[this.id] = {id: this.opera.id, nome: this.opera.nome, tipo: this.opera.idstanza};
        this.isFavorite = true;
      } else {
        delete favorite[this.id];
        this.isFavorite = false;
      }

      this.nativeStorage.setItem('favorites', favorite).then(
        (data) => console.log(data),
        (error) => this.isFavorite = false
      );
    }
  }
}
