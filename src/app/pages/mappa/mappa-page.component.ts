import { Component, OnInit } from '@angular/core';
import { MappaService } from 'src/app/services/mappa/mappa.service';
declare var require: any
const imageMapResize = require('image-map-resizer');

@Component({
  selector: 'app-mappa',
  templateUrl: './mappa-page.component.html',
  styleUrls: ['./mappa-page.component.scss'],
})
export class MappaPage {
  stanze: any[] = []
  coord: number[][] = []

  constructor(private mappaService: MappaService) { }

  imageResized() {
    imageMapResize(); // Javascript function in imageMapResizer.min.js 
  }

  ionViewWillEnter() {
    this.mappaService.getStanze().subscribe((res:any) => {
      this.stanze = res.stanze;

      this.stanze.forEach((stanza:any) => {
        this.coord.push([parseInt(stanza.xleft), parseInt(stanza.ytop), parseInt(stanza.xright), parseInt(stanza.ybottom)]);
      });

      this.imageResized();
    });
  }
}
