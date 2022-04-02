import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  private url = 'http://localhost:3000/newcontact';

  constructor(private http: HttpClient) { }

  submitContact(contactObj: Contact): void {
    console.log("pre-sending", contactObj)
    this.http.post<any>(this.url, contactObj)
      .subscribe()
  }
}
