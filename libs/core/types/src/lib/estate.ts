type ID = string;

export interface Estate {
  id: ID;
  city: string;
  street: string;
  number: number;
  floors: number;
  apartments: number;
  contacts: ID[];
  elevators: number;
}
