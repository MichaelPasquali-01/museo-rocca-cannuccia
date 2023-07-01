import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistaService {

  constructor(private http: HttpClient) { }

  getDettagliArtista(id: number|null): Observable<any> {
    if (id === null) id = 0;

    const url = 'https://unitestexample.onrender.com'
    return this.http.get(`${url}/artisti/${id}`);
  }

  getDettagliOpera(): Observable<any> {
    const url = 'https://unitestexample.onrender.com'
    return this.http.get(`${url}/opere`);
  }
}
