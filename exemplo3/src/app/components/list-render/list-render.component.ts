import { Component, OnInit } from '@angular/core';
import { Animal } from '../../Animal';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css',
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    { name: 'turcar', type: 'dog', age: 4 },
    { name: 'tom', type: 'cat', age: 6 },
    { name: 'frida', type: 'dog', age: 5 },
    { name: 'bob', type: 'hourse', age: 1 },
  ];

  animalDetails = '';

  constructor(private listService: ListService) {}

  showAge(animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

  removeAnimal(animal: Animal) {
    this.animals = this.listService.remove(this.animals, animal);
  }

  ngOnInit(): void {}
}
