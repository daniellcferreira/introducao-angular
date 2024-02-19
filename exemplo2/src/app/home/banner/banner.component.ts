import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  @Output() onClick: EventEmitter<string> = new EventEmitter();
}
