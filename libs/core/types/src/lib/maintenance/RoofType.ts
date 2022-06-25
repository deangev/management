export interface RoofDataType {
  roofs: RoofType[];
}

interface RoofType {
  storey: string;
  square_meter: number;
  access: string;
  description: string;
  sealing: string;
  note: string;
}
