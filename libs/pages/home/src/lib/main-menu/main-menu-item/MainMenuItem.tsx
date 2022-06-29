import React, { useCallback } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { IconType } from '@sagi/core/icons';
import { Icon } from '@sagi/core/ui-components';
import { useNavigation } from '@react-navigation/native';

export interface MainMenuItemProps {
  name: any;
  title: string;
  icon: IconType;
}

export function MainMenuItem({ name, title, icon }: MainMenuItemProps) {
  const navigation = useNavigation();
  const handlePress = useCallback(() => {
    navigation.navigate(name);
  }, []);

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

export default MainMenuItem;
