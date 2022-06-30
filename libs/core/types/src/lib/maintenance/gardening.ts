export interface Gardening {
  description: string;
  note: string;
  irrigation_system: Irrigation_system[];
  fertilizing_machine: Fertilizing_machine[];
  irrigation_taps: Irrigation_tap[];
  period: Period[];
  jug: Jug[]
}

interface Irrigation_system {
  type: string; //
  location: string;
}

interface Fertilizing_machine {
  type: string;
  location: string;
  note: string;
}

interface Irrigation_tap {
  tap: string;
  route: string;
  note: string;
}

interface Period {
  day: number;
  from_time: number;
  to_time: number;
}

interface Jug {
    type: string
    location: string
    note: string
    require_planting: boolean
    auto_irrigation: boolean
}