export interface SprinklerDataType {
  location: string;
  tap: string;
  generator_type: string;
  generator_model: string;
  engine_number: number;
  engine_type: string;
  horsepower: number;
  volume_liter: number;
  generator_room_location: string;
  sprinkler: SprinklerType;
}

interface SprinklerType {
  model: string;
  manufacturer: string;
  pumps: number;
  systems: string;
  location: string;
  note: string;
}
