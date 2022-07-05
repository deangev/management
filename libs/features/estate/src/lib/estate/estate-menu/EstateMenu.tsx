import { useNavigation } from '@react-navigation/native';
import { IconType } from '@management/core/icons';
import { routes } from '@management/core/routes';
import { MenuIconItem } from '@management/core/ui-components';
import React, { useCallback, useMemo, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { maintenanceRoutes } from '@management/core/routes';
import EstateMenuItem from './estate-menu-item/EstateMenuItem';

/* eslint-disable-next-line */
export interface EstateMenuProps {
  estateID: string;
}

const MENU_ITEMS: string[] = ['maintenance', 'service-calls'];

export function EstateMenu({ estateID }: EstateMenuProps) {
  const navigation = useNavigation();
  const [secondMenu, setSecondMenu] = useState('');

  const mainMenuFeatures = useMemo(
    () =>
      MENU_ITEMS.map((feature: string) =>
        routes.find((route) => route.name === feature)
      ) as typeof routes,
    []
  );

  const secondMenuFeatures = useMemo(() => {
    if (secondMenu === 'maintenance') return maintenanceRoutes;
    return [];
  }, [secondMenu]);

  const handlePress = useCallback(
    (name: string) => {
      if (!secondMenu && name === 'maintenance') {
        setSecondMenu(name);
      } else {
        //@ts-ignore
        navigation.navigate(name, { estateID });
      }
    },
    [navigation, secondMenu, estateID]
  );

  const handleReturnMenu = useCallback(() => {
    setSecondMenu('');
  }, []);

  return (
    <View style={style.featuresContainer}>
      {secondMenu && (
        <MenuIconItem
          icon="return"
          title="תפריט ראשי"
          handlePress={handleReturnMenu}
        />
      )}
      {(!secondMenu ? mainMenuFeatures : secondMenuFeatures).map((feature) => (
        <EstateMenuItem
          key={feature.name}
          feature={feature}
          handlePress={handlePress}
        />
      ))}
    </View>
  );
}

const style = StyleSheet.create({
  featuresContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: '100%',
  },
});

export default EstateMenu;
