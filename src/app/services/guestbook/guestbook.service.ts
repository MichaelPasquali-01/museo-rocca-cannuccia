import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuestbookService {

  constructor(private http: HttpClient) { }

  getRecensioni(): Observable<any> {
    const url = 'https://unitestexample.onrender.com'
    return this.http.get(`${url}/guestbooks`);
  }
}

