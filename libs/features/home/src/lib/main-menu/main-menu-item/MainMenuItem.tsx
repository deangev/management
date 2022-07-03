import React, { useCallback } from 'react';
import { IconType } from '@management/core/icons';
import { MenuIconItem } from '@management/core/ui-components';
import { useNavigation } from '@react-navigation/native';

export interface MainMenuItemProps {
  name: string;
  title: string;
  icon: IconType;
}

export function MainMenuItem({ name, title, icon }: MainMenuItemProps) {
  const navigation = useNavigation();
  const handlePress = useCallback(() => {
    //@ts-ignore
    navigation.navigate(name);
  }, [navigation, name]);

  return <MenuIconItem handlePress={handlePress} title={title} icon={icon} />;
}

export default MainMenuItem;
