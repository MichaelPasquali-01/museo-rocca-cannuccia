import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MappaService {

  constructor(private http: HttpClient) { }

  getStanze() {
    const url = 'https://unitestexample.onrender.com'
    return this.http.get(`${url}/stanze`);
  }
}
