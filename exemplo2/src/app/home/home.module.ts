import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent, BannerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [HomeComponent, BannerComponent]
})
export class HomeModule { }
