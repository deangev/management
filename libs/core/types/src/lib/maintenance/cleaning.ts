export interface Cleaning {
  plan: string;
  note: string;
  scent_diffusers: Scent_diffuser[];
  cans: Can[];
  extra_payments: Payment[];
  days: number[];
  materials: string; ////
}

interface Scent_diffuser {
  serial: string;
  type: string;
  location: string;
}

interface Can {
  type: string;
  entrance_location: string;
}

interface Payment {
  type: string;
  note: string;
}
