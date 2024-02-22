import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.css',
})
export class EventsComponent implements OnInit {
  show: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  showMessenge(): void {
    this.show = !this.show;
  }
}
