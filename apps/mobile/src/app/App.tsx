import React, { useCallback, useEffect } from 'react';
import { useLazyQuery, useQuery } from '@apollo/client';
import { EstateQuery, EstatesQuery } from '@sagi/graphql-services';
import {
  SafeAreaView,
  ScrollView,
  Text,
  StatusBar,
  View,
  StyleSheet,
} from 'react-native';
import { EstateType } from '@sagi/core/types';
import CreateEstate from './create-estate/create-estate';

export const App = () => {
  const { data, refetch: getEstates } = useQuery(EstatesQuery);
  const [getEstate, { data: estateData }] = useLazyQuery(EstateQuery);

  useEffect(() => {
    const getEstateData = async () => {
      if (!data?.estatesData.hits) return;

      await getEstate({
        variables: { estateId: data?.estatesData.estates?.[0]._id },
      });
    };
    getEstateData();
  }, [data, getEstate]);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Text>First Estate City: {estateData?.estateData?.address.city}</Text>
          <CreateEstate getEstates={getEstates} />
          <Text>
            {data?.estatesData.estates.map((estate: EstateType) => (
              <View key={estate._id} style={styles.estateContainer}>
                <Text>{estate.address.city}</Text>
                <Text>{estate.address.street}</Text>
                <Text>{estate.address.number}</Text>
              </View>
            ))}
          </Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  estateContainer: {
    padding: 20,
  },
});
export default App;
