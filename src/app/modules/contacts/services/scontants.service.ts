import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SContantsService {

  url: string;

  constructor(private http: HttpClient) { }

  getUsuarios() {
    return this.http.get<any>(this.url + '?page=2').pipe(map((data) => data));
  }

  getUsuario(id: string) 
  {
    console.log(this.url + id);
    return this.http.get<any>(this.url + id).pipe(map((data) => data));
  }
}
