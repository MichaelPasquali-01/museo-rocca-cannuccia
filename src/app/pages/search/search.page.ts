import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  opere:any[] = [];
  artisti:any[] = [];

  resultsOpere:any[] = [];
  resultsArtisti:any[] = [];

  status:number = -1;

  cats:any[] = [];

  constructor(private searchService: SearchService) {}

  ionViewWillEnter() {
    this.searchService.getOpere().subscribe(res => {
      this.opere = [...res.opere];
      this.resultsOpere = [...this.opere];
      this.status = res.status;
    }, error => this.status = 500);

    this.searchService.getArtisti().subscribe(res => {
      this.artisti = [...res.artisti];
      this.resultsArtisti = [...this.artisti];
      this.status = res.status;
    }, error => this.status = 500);
  }

  ngOnInit() { }

  cerca(event:any) {
    const query = event.target.value.toLowerCase();

    if(query !== "") {
      this.resultsOpere = this.opere.filter((element) => 
        element.nome.toLowerCase().indexOf(query) > -1
      );

      this.resultsArtisti = this.artisti.filter((element) => 
        element.nome.toLowerCase().indexOf(query) > -1
      );
    } else {
      this.resultsOpere = this.opere;
      this.resultsArtisti = this.artisti;
    }
  }
}
