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
  public selectedLocation = signal<CityTimezone>(this.guatemala);

  constructor() {
    this.locations.set(this.mapCityTimezones());
  }

  public selectLocation(cityTimezone: string) {
    const selected = this.FindLocation(cityTimezone);
    if (!selected) return;
    this.selectedLocation.set(selected);
    this.changeSelectedStatus(selected);
  }

  private FindLocation(cityTimezone: string) {
    const cityIdx = this.locations().findIndex(
      (city) => city.timezoneName === cityTimezone
    );
    if (cityIdx === -1) return null;
    return this.locations()[cityIdx];
  }

  private changeSelectedStatus(cityTimeZone: CityTimezone) {
    cityTimeZone.selected = !cityTimeZone.selected;
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
