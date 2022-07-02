import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { EstateType } from '@management/core/types';
import { Icon } from '@management/core/ui-components';
import { Box, Text } from 'native-base';
import { useCallback } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

/* eslint-disable-next-line */
export interface EstatesItemProps {
  item: { estate: EstateType };
  index: number;
}

export function EstatesItem({
  item: {
    estate: { _id, address },
  },
  index,
}: EstatesItemProps) {
  const navigation = useNavigation();
  const handleEstatePress = useCallback(
    (estateId: string) => {
      //@ts-ignore
      navigation.navigate('estate', {
        estateId,
      });
    },
    [navigation]
  );

  return (
    <TouchableOpacity
      key={index}
      onPress={() => handleEstatePress(_id)}
      style={styles.estateContainer}
    >
      <Box
        borderBottomWidth="1"
        _dark={{
          borderColor: 'gray.600',
        }}
        borderColor="coolGray.200"
        pl="2"
        pr="3"
        py="0.5"
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <Icon icon="building" size={30} />
        <Text style={{ paddingLeft: 10 }}>
          {address.city}, {address.street} {address.number}
        </Text>
      </Box>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  estateContainer: {
    height: 90,
    width: '100%',
  },
});

export default EstatesItem;
