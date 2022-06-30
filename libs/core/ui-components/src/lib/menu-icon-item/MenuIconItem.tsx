import { IconType } from '@sagi/core/icons';
import React from 'react';

import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from '../icon/Icon';

export interface MenuIconItemProps {
  handlePress: () => void;
  icon: IconType;
  title: string;
}

export function MenuIconItem({ handlePress, icon, title }: MenuIconItemProps) {
  return (
    <TouchableOpacity style={style.container} onPress={handlePress}>
      <Text>
        <Icon icon={icon} size={40} />
      </Text>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '33%',
    marginTop: 16,
    marginBottom: 16,
  },
});

export default MenuIconItem;
