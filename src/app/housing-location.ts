export interface HousingLocation {
  id: number;
  name: string;
  city: string;
  state: string;
  photo: string;
  /** Intrinsic width for NgOptimizedImage (display width). Omit for default 400. */
  photoWidth?: number;
  /** Intrinsic height for NgOptimizedImage (display height). Omit for default 200. */
  photoHeight?: number;
  availableUnits: number;
  wifi: boolean;
  laundry: boolean;
}
