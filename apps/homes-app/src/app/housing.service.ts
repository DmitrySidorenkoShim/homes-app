import { Injectable } from '@angular/core';
import { HousingLocation } from '@homes-app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = '/api/locations';

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const res = await fetch(this.url);
    return (await res.json()) ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const res = await fetch(`${this.url}/${id}`);
    if (res.ok) {
      return (await res.json()) ?? undefined;
    }
    return undefined;
  }

  submitApplication(firstName: string, lastName: string, email: string): void {
    console.log(firstName, lastName, email);
  }
}
