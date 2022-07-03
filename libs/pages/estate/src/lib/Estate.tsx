import { useQuery } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import { IconType } from '@management/core/icons';
import { routes } from '@management/core/routes';
import { EstateType } from '@management/core/types';
import { MenuIconItem } from '@management/core/ui-components';
import { EstateQuery } from '@management/graphql-services';
import React, { useCallback, useMemo } from 'react';

import { View, Text, StyleSheet, Button } from 'react-native';
import EstateBanner from './estate-banner/EstateBanner';
import EstateMenu from './estate-menu/EstateMenu';

/* eslint-disable-next-line */
export interface EstateProps {
  route: {
    params: { estateID: string };
  };
}

interface QueryType {
  estateData: EstateType;
}

export function Estate({ route }: EstateProps) {
  const { data } = useQuery<QueryType>(EstateQuery, {
    variables: { estateID: route.params.estateID },
  });
  const navigation = useNavigation();

  if (!data) return <View></View>;

  const handleEditPress = () => {
    //@ts-ignore
    navigation.navigate('estate-form', {
      estate: data.estateData,
    });
  };

  const { address, apartments, floors } = data.estateData;

  return (
    <View>
      <EstateBanner address={address} apartments={apartments} floors={floors} />
      <Button onPress={handleEditPress} title="ערוך בניין" />

      <EstateMenu estateID={route.params.estateID} />
    </View>
  );
}

export default Estate;
