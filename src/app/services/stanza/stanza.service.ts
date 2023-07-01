import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StanzaService {

  constructor(private http: HttpClient) { }

  getStanza(id: number|null) {
    const url = 'https://unitestexample.onrender.com'
    return this.http.get(`${url}/stanze`);
  }

  getOpere() {
    const url = 'https://unitestexample.onrender.com'
    return this.http.get(`${url}/opere`);
  }
}
