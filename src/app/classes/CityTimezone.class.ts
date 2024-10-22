import { CountryCode } from 'countries-and-timezones';

export class CityTimezone {
  timezoneName: string;
  utcOffset: number;
  utcOffsetStr: string;
  country: CountryCode;
  selected: boolean;

  constructor(
    timezoneName: string,
    countries: CountryCode[],
    utcOffset: number,
    utcOffsetStr: string
  ) {
    this.timezoneName = timezoneName;
    this.utcOffset = utcOffset;
    this.utcOffsetStr = utcOffsetStr;
    this.country = countries[0];
    this.selected = false;
  }

  public get name() {
    return this.trimTimezoneName();
  }

  public get region() {
    return this.trimRegion();
  }

  private trimTimezoneName() {
    const rawName = this.timezoneName.split('/').slice(-1)[0];
    return rawName.replace(/_/g, ' ');
  }

  private trimRegion() {
    return this.timezoneName.split('/')[0];
  }
}
