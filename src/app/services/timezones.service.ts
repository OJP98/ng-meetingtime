import { Injectable } from '@angular/core';
import {
  getAllTimezones,
  Timezone,
  TimezoneName,
} from 'countries-and-timezones';
import { CityTimezone } from '@classes/CityTimezone.class';

@Injectable({
  providedIn: 'root',
})
export class TimezonesService {
  public allCountries: Record<TimezoneName, Timezone>;

  constructor() {
    this.allCountries = getAllTimezones();
  }

  public get cityTimezones(): CityTimezone[] {
    const cityTimezones = [];
    for (const [timeZoneName, timezone] of Object.entries(this.allCountries)) {
      if (timezone.countries.length === 0) continue;

      const cityTimezone = new CityTimezone(
        timeZoneName,
        timezone.countries,
        timezone.utcOffset,
        timezone.utcOffsetStr
      );

      cityTimezones.push(cityTimezone);
    }
    return cityTimezones;
  }
}
