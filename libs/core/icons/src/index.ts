import {
  BuildingIcon,
  DocumentIcon,
  MaintenanceIcon,
  PackageIcon,
  PlanIcon,
  ServiceIcon,
  WorkersIcon,
} from './lib/icons';

export const icons = {
  building: BuildingIcon,
  document: DocumentIcon,
  maintenance: MaintenanceIcon,
  package: PackageIcon,
  plan: PlanIcon,
  service: ServiceIcon,
  workers: WorkersIcon,
};

export type IconType = keyof typeof icons;
