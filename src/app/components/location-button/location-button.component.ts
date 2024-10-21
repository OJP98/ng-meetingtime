import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TCountryCode } from 'countries-list';

@Component({
  selector: 'app-location-button',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './location-button.component.html',
  styleUrl: './location-button.component.scss',
})
export class LocationButtonComponent {
  @Input() city!: string;
  @Input() iso2!: TCountryCode;
}
