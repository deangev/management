export interface Shelter {
  general_condition: ShelterItem;
  nuclear: ShelterItem;
  lighting: ShelterItem;
  extinguishment: ShelterItem;
  water_tank: ShelterItem;
  faucet: ShelterItem;
  first_aid_kit: ShelterItem;
  toilet: ShelterItem;
  escape_hatch: ShelterItem;
  inspections: Inspection[];
}

interface Inspection {
  date: string;
  critic_name: string;
  shelter_door: string; //////////
}

interface ShelterItem {
  note: string;
  status: Status;
}

type Status = 'proper' | 'inproper' | 'none';
