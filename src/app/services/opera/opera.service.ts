import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperaService {
  constructor(private http: HttpClient) { }

  getDettagliOpera(id: number|null): Observable<any> {
    if (id === null) id = 0;

    const url = 'https://unitestexample.onrender.com/'
    return this.http.get(`${url}/opere/${id}`);
  }

  getAutoriOpera(id: number|null) {
    const url = 'https://unitestexample.onrender.com/'
    return this.http.get(`${url}/artisti/${id}`);
  }
}
