import React, { memo } from 'react';
import { View, Text } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { icons, IconType } from '@management/core/icons';

/* eslint-disable-next-line */
export interface IconProps {
  icon: IconType;
  size?: number;
}

export const Icon = memo(({ icon, size = 16 }: IconProps) => {
  const CurrentIcon = icons[icon];
  return (
    <View>
      <CurrentIcon size={size} />
    </View>
  );
});

export default Icon;
