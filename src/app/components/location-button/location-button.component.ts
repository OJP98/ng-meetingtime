import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-location-button',
  standalone: true,
  imports: [],
  templateUrl: './location-button.component.html',
  styleUrl: './location-button.component.scss',
})
export class LocationButtonComponent {
  @Input() city!: string;
  @Input() flag!: string;
}
