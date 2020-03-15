import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(private http: HttpClient) { }

  fetchMessages(): Observable<Object> {
    return this.http.get('https://3ikr11e11g.execute-api.us-east-1.amazonaws.com/dev/interns/message/get');
  }

  // fetchMessages(): Observable<Object> {
  //   return this.http.get('/assets/messages.json');
  // }
}