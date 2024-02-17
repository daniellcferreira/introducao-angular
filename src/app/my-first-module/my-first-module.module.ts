import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFirstComponentComponent } from '../my-first-component/my-first-component.component';



@NgModule({
  declarations: [MyFirstComponentComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MyFirstComponentComponent
  ]
})
export class MyFirstModuleModule { }
