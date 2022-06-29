
import React from 'react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface IconProps {
    size: number
}

//FontAwesome
export const BuildingIcon = (props: IconProps) => (
  <FontAwesomeIcon {...props} name="building-o" />
);

//FontAwesome5
export const WorkersIcon = (props: IconProps) => (
  <FontAwesome5Icon {...props} name="people-carry" />
);

//MaterialCommunity
export const MaintenanceIcon = (props: IconProps) => (
  <MaterialCommunityIcon {...props} name="hammer-wrench" />
);
export const PlanIcon = (props: IconProps) => (
  <MaterialCommunityIcon {...props} name="archive-clock-outline" />
);

//AntDesign
export const ServiceIcon = (props: IconProps) => (
  <AntDesignIcon {...props} name="customerservice" />
);

//IoniconsIcon
export const DocumentIcon = (props: IconProps) => (
  <IoniconsIcon {...props} name="ios-document-text-outline" />
);

//Feather
export const PackageIcon = (props: IconProps) => <FeatherIcon {...props} name="package" />;
