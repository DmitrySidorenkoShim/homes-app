import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = 'http://localhost:3000/locations';

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const res = await fetch(`${this.url}/${id}`);
    if (res.ok) {
      return (await res.json()) ?? undefined;
    }
    // Fallback when server doesn't support GET /locations/:id (e.g. static file server)
    const all = await this.getAllHousingLocations();
    return all.find((loc) => loc.id === id);
  }

  submitApplication(firstName: string, lastName: string, email: string): void {
    console.log(firstName, lastName, email);
  }
}
