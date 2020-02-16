import { Injectable } from '@angular/core';

import {HttpClient ,HttpResponse, HttpHeaders} from '@angular/common/http';
import{map,filter,scan} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly URL= 'http://localhost:3000/api/items'

  constructor( private http: HttpClient) { }

  getShoppingItem(){
    return this.http
    .get(this.URL).pipe
    (
      map(res=> res)
    )
  }
  addShoppingItem(newItem: any)
  {
    let headers= new HttpHeaders()
    headers.append('content-type', 'application/json')
    return this.http
    .post(this.URL , newItem , {headers:headers}).pipe
    (
      map(res=> res)
    )
  }
}

