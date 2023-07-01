import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GuestbookFormService {

  constructor(private http: HttpClient) { }

  public uploadFormData(formData: FormData) {
    console.log(formData);
    const url = 'https://unitestexample.onrender.com'
    return this.http.post<any>(`${url}/guestbooks/`, formData).subscribe((response) => {
        console.log(response);
      });
  }
}
