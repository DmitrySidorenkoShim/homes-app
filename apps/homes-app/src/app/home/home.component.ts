import { Component, inject } from '@angular/core';

import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '@homes-app/shared/models';
import { HousingService } from '../housing.service';
import { SignalsComponent } from '../signals/signals.component';

@Component({
    standalone: true,
    selector: 'app-home',
    imports: [HousingLocationComponent, SignalsComponent],
    template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter />
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      @for (housingLocation of filteredLocationList; track housingLocation.id; let i = $index) {
        <app-housing-location [housingLocation]="housingLocation" [priority]="i === 0" />
      }
    </section>
    <section>
      <app-signals />
    </section>
    `,
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }

  filterResults(filter: string) {
    if (!filter) {
      this.filteredLocationList = this.housingLocationList;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation: HousingLocation) => housingLocation?.city.toLowerCase().includes(filter.toLowerCase())
    );
  }
}
