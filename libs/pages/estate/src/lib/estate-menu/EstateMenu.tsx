import { useNavigation } from '@react-navigation/native';
import { IconType } from '@management/core/icons';
import { routes } from '@management/core/routes';
import { MenuIconItem } from '@management/core/ui-components';
import React, { useCallback, useMemo } from 'react';

import { View, Text, StyleSheet } from 'react-native';

/* eslint-disable-next-line */
export interface EstateMenuProps {
  estateID: string
}

const MENU_ITEMS: string[] = ['service-calls', 'maintenance'];

export function EstateMenu(props: EstateMenuProps) {
  const navigation = useNavigation();

  const { estateID } = props

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
          //@ts-ignore
          handlePress={() => navigation.navigate(feature.name, { estateID })}
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
