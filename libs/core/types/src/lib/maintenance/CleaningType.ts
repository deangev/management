export interface CleaningType {
  plan: string;
  note: string;
  scent_diffusers: ScentDiffuserType[];
  cans: CanType[];
  extra_payments: PaymentType[];
  days: number[];
  materials: string;
}

interface ScentDiffuserType {
  serial: string;
  type: string;
  location: string;
}

interface CanType {
  type: string;
  entrance_location: string;
}

interface PaymentType {
  type: string;
  note: string;
}
