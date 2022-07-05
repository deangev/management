import React from 'react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';

interface IconProps {
  size: number;
}

//FontAwesome
export const BuildingIcon = (props: IconProps) => (
  <FontAwesomeIcon {...props} name="building-o" />
);
export const FireIcon = (props: IconProps) => (
  <FontAwesomeIcon {...props} name="fire-extinguisher" />
);

//FontAwesome5
export const WorkersIcon = (props: IconProps) => (
  <FontAwesome5Icon {...props} name="people-carry" />
);
export const IntercomIcon = (props: IconProps) => (
  <FontAwesome5Icon {...props} name="intercom" />
);
export const DumpIcon = (props: IconProps) => (
  <FontAwesome5Icon {...props} name="dumpster" />
);
export const ParkingIcon = (props: IconProps) => (
  <FontAwesome5Icon {...props} name="parking" />
);
export const WaterIcon = (props: IconProps) => (
  <FontAwesome5Icon {...props} name="water" />
);
export const WindIcon = (props: IconProps) => (
  <FontAwesome5Icon {...props} name="wind" />
);

//Material
export const CleaningIcon = (props: IconProps) => (
  <MaterialIcon {...props} name="cleaning-services" />
);
export const ElevatorIcon = (props: IconProps) => (
  <MaterialIcon {...props} name="elevator" />
);
export const PestIcon = (props: IconProps) => (
  <MaterialIcon {...props} name="pest-control" />
);

//MaterialCommunity
export const MaintenanceIcon = (props: IconProps) => (
  <MaterialCommunityIcon {...props} name="hammer-wrench" />
);
export const PlanIcon = (props: IconProps) => (
  <MaterialCommunityIcon {...props} name="archive-clock-outline" />
);
export const LightningIcon = (props: IconProps) => (
  <MaterialCommunityIcon {...props} name="lightning-bolt" />
);
export const AirConditionerIcon = (props: IconProps) => (
  <MaterialCommunityIcon {...props} name="air-conditioner" />
);
export const GasIcon = (props: IconProps) => (
  <MaterialCommunityIcon {...props} name="gas-cylinder" />
);
export const ElectricSwitchIcon = (props: IconProps) => (
  <MaterialCommunityIcon {...props} name="electric-switch-closed" />
);
export const FlowerIcon = (props: IconProps) => (
  <MaterialCommunityIcon {...props} name="flower-outline" />
);
export const HeatingIcon = (props: IconProps) => (
  <MaterialCommunityIcon {...props} name="patio-heater" />
);
export const PumpIcon = (props: IconProps) => (
  <MaterialCommunityIcon {...props} name="pump" />
);
export const ReturnIcon = (props: IconProps) => (
  <MaterialCommunityIcon {...props} name="keyboard-return" />
);
export const RoofIcon = (props: IconProps) => (
  <MaterialCommunityIcon {...props} name="home-roof" />
);
export const SecurityIcon = (props: IconProps) => (
  <MaterialCommunityIcon {...props} name="security" />
);
export const SafeIcon = (props: IconProps) => (
  <MaterialCommunityIcon {...props} name="safe-square-outline" />
);
export const SprinklerIcon = (props: IconProps) => (
  <MaterialCommunityIcon {...props} name="sprinkler-fire" />
);
export const WellIcon = (props: IconProps) => (
  <MaterialCommunityIcon {...props} name="water-well" />
);

//AntDesign
export const ServiceIcon = (props: IconProps) => (
  <AntDesignIcon {...props} name="customerservice" />
);
export const WifiIcon = (props: IconProps) => (
  <AntDesignIcon {...props} name="wifi" />
);

//IoniconsIcon
export const DocumentIcon = (props: IconProps) => (
  <IoniconsIcon {...props} name="ios-document-text-outline" />
);

//Feather
export const PackageIcon = (props: IconProps) => (
  <FeatherIcon {...props} name="package" />
);

//Entypo
export const ClipboardIcon = (props: IconProps) => (
  <EntypoIcon {...props} name="clipboard" />
);
