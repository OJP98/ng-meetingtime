import { Component } from '@angular/core';
import { LocationButtonComponent } from '../location-button/location-button.component';

@Component({
  selector: 'app-location-picker',
  standalone: true,
  imports: [LocationButtonComponent],
  templateUrl: './location-picker.component.html',
  styleUrl: './location-picker.component.scss',
})
export class LocationPickerComponent {}
