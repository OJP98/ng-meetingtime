import { NgFor } from '@angular/common';
import { Component, effect } from '@angular/core';
import { CityTimezone } from '@classes/CityTimezone.class';
import { LocationButtonComponent } from '@components/location-button/location-button.component';
import { TimezonesService } from '@services/timezones.service';

@Component({
  selector: 'app-location-picker',
  standalone: true,
  imports: [LocationButtonComponent, NgFor],
  templateUrl: './location-picker.component.html',
  styleUrl: './location-picker.component.scss',
})
export class LocationPickerComponent {
  public locations: CityTimezone[];

  constructor(private timezonesService: TimezonesService) {
    this.locations = this.timezonesService.locations();
    // effect(() => {
    //   this.locations = this.timezonesService.locations();
    // });
  }
}
