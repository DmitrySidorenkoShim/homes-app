export interface HousingLocation {
  id: number;
  name: string;
  city: string;
  state: string;
  photo: string;
  photoWidth?: number;
  photoHeight?: number;
  availableUnits: number;
  wifi: boolean;
  laundry: boolean;
}
