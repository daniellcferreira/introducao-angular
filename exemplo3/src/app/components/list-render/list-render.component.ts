import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css',
})
export class ListRenderComponent implements OnInit {
  animals = [
    { name: 'turcar', type: 'dog' },
    { name: 'tom', type: 'cat' },
    { name: 'frida', type: 'dog' },
    { name: 'bob', type: 'hourse' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
