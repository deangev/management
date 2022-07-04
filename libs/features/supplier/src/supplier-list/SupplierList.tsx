import React from 'react';
import { View, Button } from 'react-native';
import { useQuery } from '@apollo/client';
import { useRefetchListener } from '@management/core/hooks';
import { SupplierType } from '@management/core/types';
import { VirtualizedList } from '@management/core/ui-components';
import { SuppliersQuery } from '@management/graphql-services';
import { useNavigation } from '@react-navigation/native';
import SupplierListItem, {
  SupplierListItemProps,
} from './supplier-list-item/SupplierListItem';

type SuppliersData = {
  suppliersData: {
    suppliers: SupplierType[];
  };
};

/* eslint-disable-next-line */
export interface SupplierListProps {}

export function SupplierList(props: SupplierListProps) {
  const navigation = useNavigation();
  const { data, refetch } = useQuery<SuppliersData>(SuppliersQuery, {
    fetchPolicy: 'no-cache',
  });

  useRefetchListener({ refetch });

  const handleAddPress = () => {
    //@ts-ignore
    navigation.navigate('supplier-wizard');
  };

  return (
    <View>
      <Button onPress={handleAddPress} title="הוסף ספק חדש" />
      {!!data?.suppliersData.suppliers && (
        <VirtualizedList
          data={data.suppliersData.suppliers}
          renderItem={({ item }: SupplierListItemProps) => (
            <SupplierListItem key={item.item._id} item={item} />
          )}
        />
      )}
    </View>
  );
}

export default SupplierList;
