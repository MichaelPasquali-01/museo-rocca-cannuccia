import { Component} from '@angular/core';

@Component({
  selector: 'app-stanza',
  templateUrl: './stanza.page.html',
  styleUrls: ['./stanza.page.scss'],
})
export class StanzaPage {
  stanze: any[][];
  constructor() {
    this.stanze = [
      [
        {
          nome: 'Stanza 1',
          opere: [
            {
              titolo: 'Opera 1',
              autore: 'Autore 1',
              immagine: 'path/stanza1/immagine1.jpg'
            },
            {
              titolo: 'Opera 2',
              autore: 'Autore 2',
              immagine: 'path/stanza1/immagine2.jpg'
            }
          ]
        }
      ],
      [
        {
        nome: 'Stanza 2',
        opere: [
          {
            titolo: 'Opera 3',
            autore: 'Autore 3',
            immagine: 'path/stanza2/immagine3.jpg'
          },
          {
            titolo: 'Opera 4',
            autore: 'Autore 4',
            immagine: 'path/stanza2/immagine4.jpg'
          }
        ]
      },
        {
        nome: 'Stanza 3',
        opere: [
          {
            titolo: 'Opera 5',
            autore: 'Autore 5',
            immagine: 'path/stanza3/immagine5.jpg'
          }
        ]
      }
      ]
    ];
  }









}
