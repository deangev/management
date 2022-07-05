import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';
import { ServiceCallType } from '@management/core/types';
import { ListItem } from '@management/core/ui-components';

export interface ServiceCallListItemProps {
  item: { item: ServiceCallType };
}

export function ServiceCallListItem({
  item: {
    item: { _id, type, description },
  },
}: ServiceCallListItemProps) {
  const navigation = useNavigation();

  const handleServiceCallPress = useCallback(() => {
    //@ts-ignore
    navigation.navigate('service-call', {
      serviceCallID: _id,
    });
  }, [navigation, _id]);

  return (
    <ListItem startIcon="service" onPress={handleServiceCallPress}>
      <Text>
        {type} {description}
      </Text>
    </ListItem>
  );
}

export default ServiceCallListItem;
