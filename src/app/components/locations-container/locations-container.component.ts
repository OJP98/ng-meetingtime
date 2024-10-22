import { NgFor } from '@angular/common';
import { Component, effect } from '@angular/core';
import { CityTimezone } from '@classes/CityTimezone.class';
import { TimezonesService } from '@services/timezones.service';

@Component({
  selector: 'app-locations-container',
  standalone: true,
  imports: [NgFor],
  templateUrl: './locations-container.component.html',
  styleUrl: './locations-container.component.scss',
})
export class LocationsContainerComponent {
  public chosenLocations: CityTimezone[];

  constructor(private timezonesSrvc: TimezonesService) {
    this.chosenLocations = [];
    effect(() =>
      this.chosenLocations.push(this.timezonesSrvc.selectedLocation())
    );
  }

  public removeSelected($event: string) {
    this.timezonesSrvc.selectLocation($event);
    // TODO: Remove the selected location from the chosenLocations array
  }
}
