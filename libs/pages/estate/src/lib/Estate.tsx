import { useQuery } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import { IconType } from '@sagi/core/icons';
import { routes } from '@sagi/core/routes';
import { EstateType } from '@sagi/core/types';
import { MenuIconItem } from '@sagi/core/ui-components';
import { EstateQuery } from '@sagi/graphql-services';
import React, { useCallback, useMemo } from 'react';

import { View, Text, StyleSheet, Button } from 'react-native';
import EstateBanner from './estate-banner/EstateBanner';
import EstateMenu from './estate-menu/EstateMenu';

/* eslint-disable-next-line */
export interface EstateProps {
  route: {
    params: { estateId: string };
  };
}

interface QueryType {
  estateData: EstateType;
}


export function Estate({ route }: EstateProps) {
  const { data } = useQuery<QueryType>(EstateQuery, {
    variables: { estateId: route.params.estateId },
  });
  const navigation = useNavigation();

  if (!data) return <View></View>;

  const handleAddPress = () => {
    //@ts-ignore
    navigation.navigate('estate-form', {
      estate: data.estateData,
    });
  };

  const { address, apartments, floors } = data.estateData;

  return (
    <View>
      <EstateBanner address={address} apartments={apartments} floors={floors} />
      <Button onPress={handleAddPress} title="ערוך בניין" />

      <EstateMenu estateID={route.params.estateId} />
    </View>
  );
}


export default Estate;
