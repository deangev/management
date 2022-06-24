export interface ElevatorDataType {
  estateId: string;
  room_location: string;
  switch_location: string;
  engineer: EngineerType;
  description: string;
  elevators: ElevatorType[];
}

interface ElevatorType {
  type: string;
  control_panel_type: string;
  serial: string;
  bulb_type: string;
  responsibility: string;
  spare_parts: boolean;
  note: string;
}

interface EngineerType {
  name: string;
  number: string;
}
