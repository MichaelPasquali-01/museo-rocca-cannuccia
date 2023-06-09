import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

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

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.searchService.getOpere().subscribe(res => {
      this.opere = [...res.opere];
      this.resultsOpere = [...this.opere];
    });

    this.searchService.getArtisti().subscribe(res => {
      this.artisti = [...res.artisti];
      this.resultsArtisti = [...this.artisti];
    });
  }

  cerca(event:any) {
    const query = event.target.value.toLowerCase();
    console.log(query);
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
