export interface Garbage {
  shaft: boolean; //
  model: string;
  location: string;
  cans: Can[];
}

interface Can {
  type: string; //
  color: string; //
  designation: string; //
  liter: number;
  amount: number;
  note: string;
}
