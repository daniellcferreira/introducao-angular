import { Component } from '@angular/core';

@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrl: './my-first-component.component.css'
})
export class MyFirstComponentComponent {

  public year: number = 2024

  aumentarAno() {
    this.year = this.year + 1;
  }

  diminuirAno() {
    this.year = this.year - 1;
  }
}
