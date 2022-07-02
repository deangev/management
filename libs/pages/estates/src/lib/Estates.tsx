import React, { useCallback, useEffect, useLayoutEffect } from 'react';
import { useQuery } from '@apollo/client';
import { EstateType } from '@management/core/types';
import { EstatesQuery } from '@management/graphql-services';
import { useNavigation } from '@react-navigation/native';
import { View, VirtualizedList, Button } from 'react-native';
import EstatesItem from './estates-item/EstatesItem';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface EstatesProps {}

export function Estates(props: EstatesProps) {
  const { data, refetch } = useQuery(EstatesQuery, { fetchPolicy: 'no-cache' });
  const navigation = useNavigation();

  const handleAddPress = useCallback(() => {
    //@ts-ignore
    navigation.navigate('estate-form');
  }, [navigation]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (refetch) {
        refetch();
      }
    });

    return unsubscribe;
  }, [navigation, refetch]);

  return (
    <View>
      <Button onPress={handleAddPress} title="הוסף בניין חדש" />
      {!!data?.estatesData.estates && (
        <VirtualizedList
          data={data.estatesData.estates as EstateType[]}
          initialNumToRender={4}
          renderItem={({ item, index }) => (
            <EstatesItem item={item} index={index} />
          )}
          keyExtractor={(item) => item.key}
          getItemCount={(data) => data.length}
          getItem={getItem}
        />
      )}
    </View>
  );
}

const getItem = (data: EstateType[], index: number) => ({
  key: Math.random().toString(12).substring(0),
  estate: data[index],
});

export default Estates;
