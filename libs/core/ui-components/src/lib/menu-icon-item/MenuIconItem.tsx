import { IconType } from '@management/core/icons';
import React from 'react';

import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from '../icon/Icon';

export interface MenuIconItemProps {
  handlePress: any;
  icon: IconType;
  title: string;
}

export function MenuIconItem({ handlePress, icon, title }: MenuIconItemProps) {
  return (
    <TouchableOpacity style={style.container} onPress={handlePress}>
      <Icon icon={icon} size={40} />
      <Text style={style.title}>{title}</Text>
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
  title: {
    textAlign: 'center',
  },
});

export default MenuIconItem;
