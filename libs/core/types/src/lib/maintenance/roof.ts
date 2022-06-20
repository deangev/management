export interface RoofData {
  roofs: Roof[];
}

interface Roof {
  storey: string;
  square_meter: number;
  access: string; //
  description: string;
  sealing: string; //
  note: string;
}
