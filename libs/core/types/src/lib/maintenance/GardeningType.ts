export interface GardeningType {
  description: string;
  note: string;
  irrigation_system: IrrigationSystemType[];
  fertilizing_machine: FertilizingMachineType[];
  irrigation_taps: IrrigationTapType[];
  period: PeriodType[];
  jug: JugType[]
}

interface IrrigationSystemType {
  type: string; //
  location: string;
}

interface FertilizingMachineType {
  type: string;
  location: string;
  note: string;
}

interface IrrigationTapType {
  tap: string;
  route: string;
  note: string;
}

interface PeriodType {
  day: number;
  from_time: number;
  to_time: number;
}

interface JugType {
    type: string
    location: string
    note: string
    require_planting: boolean
    auto_irrigation: boolean
}