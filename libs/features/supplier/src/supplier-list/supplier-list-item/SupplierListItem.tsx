import React, { useCallback } from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SupplierType } from '@management/core/types';
import { ListItem } from '@management/core/ui-components';

export interface SupplierListItemProps {
  item: { item: SupplierType };
}

export function SupplierListItem({
  item: {
    item: { _id, name, phoneNumber },
  },
}: SupplierListItemProps) {
  const navigation = useNavigation();
  const handleSupplierPress = useCallback(() => {
    //@ts-ignore
    navigation.navigate('supplier', {
      supplierID: _id,
    });
  }, [navigation, _id]);

  return (
    <ListItem onPress={handleSupplierPress} startIcon="package">
      <Text>
        {name} - {phoneNumber}
      </Text>
    </ListItem>
  );
}

export default SupplierListItem;
