import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreferitiService {

  constructor(private http: HttpClient) { }

  getStanze(): Observable<any> {
    const url = 'https://unitestexample.onrender.com/'
    return this.http.get(`${url}/stanze`);
  }
}
