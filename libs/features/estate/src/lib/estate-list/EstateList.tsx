import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@apollo/client';
import { EstateType } from '@management/core/types';
import { EstatesQuery } from '@management/graphql-services';
import { useRefetchListener } from '@management/core/hooks';
import { VirtualizedList } from '@management/core/ui-components';
import EstateListItem, {
  EstateListItemProps,
} from './estate-list-item/EstateListItem';

type EstateData = {
  estatesData: {
    estates: EstateType[];
  };
};

export function EstateList() {
  const navigation = useNavigation();
  const { data, refetch } = useQuery<EstateData>(EstatesQuery, {
    fetchPolicy: 'no-cache',
  });

  useRefetchListener({ refetch });

  const handleAddPress = () => {
    //@ts-ignore
    navigation.navigate('estate-wizard');
  };

  return (
    <View>
      <Button onPress={handleAddPress} title="הוסף בניין חדש" />
      {!!data?.estatesData.estates && (
        <VirtualizedList
          data={data.estatesData.estates}
          renderItem={({ item }: EstateListItemProps) => (
            <EstateListItem key={item.item._id} item={item} />
          )}
        />
      )}
    </View>
  );
}

export default EstateList;
