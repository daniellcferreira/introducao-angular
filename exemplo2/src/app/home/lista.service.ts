import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  constructor(
    private httpClient: HttpClient 
  ) { }

  getList() {
    return this.httpClient.get('https://cat-fact.herokuapp.com/facts');
  }
}
