import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent implements OnInit {
  name: string = "Daniel";
  age: number = 36;
  job: string = "Programador";
  hobbies = ['Correr', 'Jogar', 'Estudar']
  
  constructor() { }

  ngOnInit(): void {

  }

}
