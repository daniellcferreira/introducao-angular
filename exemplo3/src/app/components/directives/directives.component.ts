import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css',
})
export class DirectivesComponent implements OnInit {
  classes = ['green-title', 'small-title'];

  constructor() {}

  ngOnInit(): void {}
}
