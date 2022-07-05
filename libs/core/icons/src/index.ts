import {
  BuildingIcon,
  DocumentIcon,
  MaintenanceIcon,
  PackageIcon,
  PlanIcon,
  ServiceIcon,
  WorkersIcon,
  LightningIcon,
  AirConditionerIcon,
  WindIcon,
  CleaningIcon,
  IntercomIcon,
  ElevatorIcon,
  FireIcon,
  DumpIcon,
  FlowerIcon,
  GasIcon,
  ElectricSwitchIcon,
  HeatingIcon,
  ParkingIcon,
  PestIcon,
  WellIcon,
  RoofIcon,
  SecurityIcon,
  SafeIcon,
  ClipboardIcon,
  SprinklerIcon,
  WifiIcon,
  PumpIcon,
  WaterIcon,
  ReturnIcon,
} from './lib/icons';

export const icons = {
  'air-conditioner': AirConditionerIcon,
  building: BuildingIcon,
  cleaning: CleaningIcon,
  clipboard: ClipboardIcon,
  document: DocumentIcon,
  dump: DumpIcon,
  elevator: ElevatorIcon,
  fire: FireIcon,
  flower: FlowerIcon,
  gas: GasIcon,
  generator: ElectricSwitchIcon,
  heating: HeatingIcon,
  intercom: IntercomIcon,
  lightning: LightningIcon,
  maintenance: MaintenanceIcon,
  package: PackageIcon,
  parking: ParkingIcon,
  pest: PestIcon,
  plan: PlanIcon,
  pump: PumpIcon,
  return: ReturnIcon,
  roof: RoofIcon,
  safe: SafeIcon,
  security: SecurityIcon,
  service: ServiceIcon,
  sprinkler: SprinklerIcon,
  water: WaterIcon,
  well: WellIcon,
  wifi: WifiIcon,
  wind: WindIcon,
  workers: WorkersIcon,
};

export type IconType = keyof typeof icons;
