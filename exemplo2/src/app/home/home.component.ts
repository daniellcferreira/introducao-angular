import { Component, OnInit } from '@angular/core';
import { ListaService } from './lista.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  result!: string;

  listOfCats!: Observable<any[]>;

  constructor(
    private listaService: ListaService
  ) {}

  ngOnInit() {
    this.getListFromService();
  }

  getListFromService() {
    
  };
  

  receberResult(value: string) {
    this.result = value;
  }
}
