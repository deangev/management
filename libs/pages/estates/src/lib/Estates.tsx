import React, { useCallback } from 'react';
import { useQuery } from '@apollo/client';
import { EstateType } from '@sagi/core/types';
import { EstatesQuery } from '@sagi/graphql-services';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export interface EstatesProps {
  navigation: NavigationProp<ParamListBase>;
}

export function Estates({ navigation }: EstatesProps) {
  const { data } = useQuery(EstatesQuery);

  const handleEstatePress = useCallback(
    (estateId: string) => {
      navigation.navigate('Estate', {
        estateId,
      });
    },
    [navigation]
  );

  return (
    <View>
      {data?.estatesData.estates.map((estate: EstateType) => (
        <TouchableOpacity
          key={estate._id}
          onPress={() => handleEstatePress(estate._id)}
          style={styles.estateContainer}
        >
          <Text>{estate.address.city}</Text>
          <Text>{estate.address.street}</Text>
          <Text>{estate.address.number}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  estateContainer: {
    padding: 20,
  },
});

export default Estates;
