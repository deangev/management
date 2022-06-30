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

/* eslint-disable-next-line */
export interface EstateProps {
  route: {
    params: { estateId: string };
  };
}

interface QueryType {
  estateData: EstateType;
}

const features: string[] = ['service-calls', 'maintenance'];

export function Estate({ route }: EstateProps) {
  const { data } = useQuery<QueryType>(EstateQuery, {
    variables: { estateId: route.params.estateId },
  });
  const navigation = useNavigation();

  const formattedFeatures = useMemo(() => {
    return features.map((feature: string) =>
      routes.find((route) => route.name === feature)
    ) as typeof routes;
  }, []);

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

      <View style={style.featuresContainer}>
        {formattedFeatures.map((feature) => (
          <MenuIconItem
            key={feature.name}
            icon={feature.icon as IconType}
            title={feature.title}
            handlePress={() => {
              console.log('');
            }}
          />
        ))}
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  informationContainer: {
    padding: 10,
    backgroundColor: '#7171714d',
    minHeight: 100,
  },
  featuresContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: '100%',
  },
});

export default Estate;
