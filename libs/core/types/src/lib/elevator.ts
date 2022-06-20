interface ElevatorData {
  estateId: string;
  room_location: string;
  switch_location: string;
  engineer: Engineer;
  description: string;
  elevators: Elevator[];
}

interface Elevator {
  type: string;
  control_panel_type: string;
  serial: string;
  bulb_type: string;
  responsibility: string;
  spare_parts: boolean;
  note: string;
}

interface Engineer {
  name: string;
  number: string;
}
