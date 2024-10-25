import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';
import { CityTimezone } from '@classes/CityTimezone.class';
import { LocationButtonComponent } from '@components/location-button/location-button.component';
import { TimezonesService } from '@services/timezones.service';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AgVirtualScrollModule } from 'ag-virtual-scroll';

@Component({
  selector: 'app-location-picker',
  standalone: true,
  imports: [
    LocationButtonComponent,
    NgFor,
    ScrollingModule,
    AgVirtualScrollModule,
  ],
  templateUrl: './location-picker.component.html',
  styleUrl: './location-picker.component.scss',
})
export class LocationPickerComponent {
  public locations: CityTimezone[];
  public noResults = signal(false);

  constructor(private timezonesService: TimezonesService) {
    this.locations = this.timezonesService.locations();
  }

  public setResults(event: Event): void {
    this.noResults.set(false);
    const input = event.target as HTMLInputElement;
    const filter = input.value.trim().toLowerCase();
    this.filterLocations(filter);
  }

  public filterLocations(filter: string): void {
    this.locations = this.timezonesService.locations();
    this.locations = this.locations.filter(
      (location) =>
        location.name.toLowerCase().includes(filter) && !location.selected
    );
    if (this.locations.every((location) => location.selected)) {
      this.noResults.set(true);
    }
  }

  public clearInput(): void {
    const input = document.getElementById('search-input') as HTMLInputElement;
    if (input) {
      input.value = '';
    }
  }
}
