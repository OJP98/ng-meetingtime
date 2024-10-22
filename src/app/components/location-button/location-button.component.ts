import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CityTimezone } from '@classes/CityTimezone.class';
import { TimezonesService } from '@services/timezones.service';

@Component({
  selector: 'app-location-button',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './location-button.component.html',
  styleUrl: './location-button.component.scss',
})
export class LocationButtonComponent {
  @Input() cityTimezone!: CityTimezone;

  constructor(private timezonesService: TimezonesService) {}

  public selectLocation() {
    this.timezonesService.selectLocation(this.cityTimezone.timezoneName);
  }
}
