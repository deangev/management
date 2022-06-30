export interface Water_pump {
  note: string;
  room_location: string;
  distribution_board_location: string;
  pumps: Pump[];
}

interface Pump {
  model: string;
  activated_by: string;
  controller_model: string;
  supplied_systems: string;
  note: string;
}
