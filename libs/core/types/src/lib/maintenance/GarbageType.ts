export interface GarbageType {
  shaft: boolean;
  model: string;
  location: string;
  cans: CanType[];
}

interface CanType {
  type: string;
  color: string;
  designation: string;
  liter: number;
  amount: number;
  note: string;
}
