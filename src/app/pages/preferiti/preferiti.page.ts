import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { PreferitiService } from 'src/app/services/preferiti/preferiti.service';

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.page.html',
  styleUrls: ['./preferiti.page.scss'],
})
export class PreferitiPage{
  stanze:any[] = []
  preferiti:any[] = []

  constructor(private nativeStorage : NativeStorage,
    private preferitiService: PreferitiService) { }


  ionViewWillEnter() {
    this.preferitiService.getStanze().subscribe({
      next: (res:any) => {
        this.stanze = res.stanze;

        this.nativeStorage.getItem('favorites').then(
          (data) => {
            this.preferiti = Object.values(data);
            const stanzeDisponibili:any[] = [];

            this.preferiti.forEach((preferito:any) => {
              stanzeDisponibili.push(preferito.tipo);
            });

            this.stanze = this.stanze.filter(stanza => stanzeDisponibili.includes(stanza.id));
          }, (error) => {
            this.preferiti = [];
            this.stanze = [];
          }
        );
      }, error: () => {
        this.nativeStorage.getItem('favorites').then(
          (data) => {
            this.preferiti = Object.values(data);
            this.stanze = [];
          }, (error) => {
            this.preferiti = [];
            this.stanze = [];
          }
        );
      }
    });
  }
}
