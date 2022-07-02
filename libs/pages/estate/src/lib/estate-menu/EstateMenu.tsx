import { useNavigation } from '@react-navigation/native';
import { IconType } from '@management/core/icons';
import { routes } from '@management/core/routes';
import { MenuIconItem } from '@management/core/ui-components';
import React, { useCallback, useMemo } from 'react';

import { View, Text, StyleSheet } from 'react-native';

/* eslint-disable-next-line */
export interface EstateMenuProps {}

const MENU_ITEMS: string[] = ['service-calls', 'maintenance'];

export function EstateMenu(props: EstateMenuProps) {
  const navigation = useNavigation();

  const formattedFeatures = useMemo(
    () =>
      MENU_ITEMS.map((feature: string) =>
        routes.find((route) => route.name === feature)
      ) as typeof routes,
    []
  );

  return (
    <View style={style.featuresContainer}>
      {formattedFeatures.map((feature) => (
        <MenuIconItem
          key={feature.name}
          icon={feature.icon as IconType}
          title={feature.title}
          handlePress={() => navigation.navigate(feature.name as any)}
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
