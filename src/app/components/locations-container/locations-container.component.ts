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
    effect(
      () => (this.chosenLocations = this.timezonesSrvc.selectedLocations())
    );
  }

  public removeSelected(timezoneName: string) {
    this.timezonesSrvc.removeSelectedLocation(timezoneName);
  }
}
