import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { HousingLocation } from '../housing-location';
import { RouterLink } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-housing-location',
    imports: [RouterLink, NgOptimizedImage],
    template: `
    <section class="listing">
      <img
        class="listing-photo"
        [ngSrc]="housingLocation.photo"
        [alt]="'Exterior photo of ' + housingLocation.name"
        [width]="housingLocation.photoWidth ?? 400"
        [height]="housingLocation.photoHeight ?? 200"
        [priority]="priority"
        [attr.loading]="priority ? undefined : 'lazy'"
      />
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">{{ housingLocation.city }}, {{ housingLocation.state }}</p>
      <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
    </section>
  `,
    styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
  /** Set to true for the LCP image (e.g. first listing on home). */
  @Input() priority = false;
}
