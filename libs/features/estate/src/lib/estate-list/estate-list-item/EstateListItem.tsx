import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { EstateType } from '@management/core/types';
import { ListItem } from '@management/core/ui-components';
import { Text } from 'native-base';
import { useCallback } from 'react';

export interface EstateListItemProps {
  item: { item: EstateType };
}

export function EstateListItem({
  item: {
    item: {
      _id,
      address: { city, street, number },
    },
  },
}: EstateListItemProps) {
  const navigation = useNavigation();
  const handleEstatePress = useCallback(() => {
    //@ts-ignore
    navigation.navigate('estate', {
      estateID: _id,
    });
  }, [navigation, _id]);

  return (
    <ListItem onPress={handleEstatePress} startIcon="building">
      <Text>
        {city}, {street} {number}
      </Text>
    </ListItem>
  );
}

export default EstateListItem;
