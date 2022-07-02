import { EstateType } from '@management/core/types';
import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

/* eslint-disable-next-line */
export interface EstateBannerProps
  extends Pick<EstateType, 'address' | 'floors' | 'apartments'> {}

export function EstateBanner({
  address,
  floors,
  apartments,
}: EstateBannerProps) {
  return (
    <View style={style.informationContainer}>
      <Text>
        {address.city}, {address.street} {address.number}, {address.entry}
      </Text>
      <Text>קומות: {floors}</Text>
      <Text>דירות: {apartments}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  informationContainer: {
    padding: 10,
    backgroundColor: '#7171714d',
    minHeight: 100,
  },
});

export default EstateBanner;
