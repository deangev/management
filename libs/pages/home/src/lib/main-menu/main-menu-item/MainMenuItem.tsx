import React, { useCallback } from 'react';
import { IconType } from '@sagi/core/icons';
import { MenuIconItem } from '@sagi/core/ui-components';
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
  }, [navigation, name]);

  return <MenuIconItem handlePress={handlePress} title={title} icon={icon} />;
}

export default MainMenuItem;
