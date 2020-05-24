import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Service {
  private static url = 'http://localhost:4545';

  constructor(private http: HttpClient) { }

  getMessage(): Observable<string>{
    return this.http.request('GET', `${Service.url}/message`)
      .pipe(map(x => x.text));
  }
}
