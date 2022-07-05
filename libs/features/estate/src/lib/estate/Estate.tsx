import { useQuery } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import { IconType } from '@management/core/icons';
import { routes } from '@management/core/routes';
import { EstateType } from '@management/core/types';
import { MenuIconItem } from '@management/core/ui-components';
import { EstateQuery } from '@management/graphql-services';
import React, { useCallback, useMemo } from 'react';

import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native';
import EstateBanner from './estate-banner/EstateBanner';
import EstateMenu from './estate-menu/EstateMenu';
import { ScrollView } from 'native-base';

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
    navigation.navigate('estate-wizard', {
      estate: data.estateData,
    });
  };

  const { address, apartments, floors } = data.estateData;

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <EstateBanner
          address={address}
          apartments={apartments}
          floors={floors}
        />
        <Button onPress={handleEditPress} title="ערוך בניין" />

        <EstateMenu estateID={route.params.estateID} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Estate;
