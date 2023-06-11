import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {}

  getOpere(): Observable<any> {
    const url = 'https://unitestexample.onrender.com/'
    return this.http.get(`${url}/opere`);
  }

  getArtisti(): Observable<any> {
    const url = 'https://unitestexample.onrender.com/'
    return this.http.get(`${url}/artisti`);
  }
}
