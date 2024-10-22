import { Injectable, signal } from '@angular/core';
import { getAllTimezones } from 'countries-and-timezones';
import { CityTimezone } from '@classes/CityTimezone.class';

@Injectable({
  providedIn: 'root',
})
export class TimezonesService {
  public guatemala = new CityTimezone(
    'America/Guatemala',
    ['GT'],
    -6,
    '-06:00'
  );
  public locations = signal<CityTimezone[]>([]);
  public selectedLocations = signal<CityTimezone[]>([]);

  constructor() {
    this.locations.set(this.mapCityTimezones());
  }

  public updateSelectedLocation(cityTimezone: string) {
    const location = this.FindLocation(cityTimezone)!;
    location.updateStatus();
    this.selectedLocations().push(location);
  }

  public removeSelectedLocation(cityTimezone: string) {
    const location = this.FindLocation(cityTimezone)!;
    location.updateStatus();
    const selectedLocationIndex = this.FindSelectedLocationIndex(cityTimezone);
    this.selectedLocations().splice(selectedLocationIndex, 1);
  }

  private FindSelectedLocationIndex(cityTimezone: string) {
    const cityIdx = this.selectedLocations().findIndex(
      (city) => city.timezoneName === cityTimezone
    );
    return cityIdx;
  }

  private FindLocation(cityTimezone: string) {
    const location = this.locations().find(
      (city) => city.timezoneName === cityTimezone
    );
    return location;
  }

  private mapCityTimezones(): CityTimezone[] {
    const allCountries = getAllTimezones();
    const cityTimezones = [];
    for (const [timeZoneName, timezone] of Object.entries(allCountries)) {
      if (timezone.countries.length === 0) continue;

      const cityTimezone = new CityTimezone(
        timeZoneName,
        timezone.countries,
        timezone.utcOffset,
        timezone.utcOffsetStr
      );

      cityTimezones.push(cityTimezone);
    }
    return cityTimezones.sort((a, b) => a.name.localeCompare(b.name));
  }
}
