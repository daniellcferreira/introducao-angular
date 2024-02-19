import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './home.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    HomeComponent, BannerComponent
  ],
  imports: [
    CommonModule, HttpClientModule
  ],
  exports: [HomeComponent, BannerComponent]
})
export class HomeModule { }
