export interface Bellows {
  model: string;
  activatedBy: string; // timer | manual | auto | sensor
  CO_gas_sensors: number;
  location: string;
  room_location: string;
  note: string;
}
