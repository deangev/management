export interface WaterPumpType {
  note: string;
  room_location: string;
  distribution_board_location: string;
  pumps: PumpType[];
}

interface PumpType {
  model: string;
  activated_by: string;
  controller_model: string;
  supplied_systems: string;
  note: string;
}
