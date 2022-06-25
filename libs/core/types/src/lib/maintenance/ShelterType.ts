export interface ShelterType {
  general_condition: ShelterItemType;
  nuclear: ShelterItemType;
  lighting: ShelterItemType;
  extinguishment: ShelterItemType;
  water_tank: ShelterItemType;
  faucet: ShelterItemType;
  first_aid_kit: ShelterItemType;
  toilet: ShelterItemType;
  escape_hatch: ShelterItemType;
  inspections: InspectionType[];
}

interface InspectionType {
  date: string;
  critic_name: string;
  shelter_door: string;
}

interface ShelterItemType {
  note: string;
  status: 'proper' | 'improper' | 'none'
}