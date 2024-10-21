import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { LocationButtonComponent } from '@components/location-button/location-button.component';
import { getAllCountries } from 'countries-and-timezones';

@Component({
  selector: 'app-location-picker',
  standalone: true,
  imports: [LocationButtonComponent, NgFor],
  templateUrl: './location-picker.component.html',
  styleUrl: './location-picker.component.scss',
})
export class LocationPickerComponent {
  public countries: unknown;
  constructor() {
    this.countries = getAllCountries();
  }
}
