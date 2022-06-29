import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { IconType } from '@sagi/core/icons';
import { Icon } from '@sagi/core/ui-components';

export interface MainMenuItemProps {
  title: string;
  icon: IconType;
}

export function MainMenuItem({ title, icon }: MainMenuItemProps) {
  return (
    <TouchableOpacity style={style.container}>
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

export default MainMenuItem;
