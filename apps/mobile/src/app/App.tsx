import React from 'react';
import { useQuery } from '@apollo/client';
import { EstatesQuery } from '@sagi/graphql-services';
import {
  SafeAreaView,
  ScrollView,
  Text,
  StatusBar,
  View,
  StyleSheet,
} from 'react-native';
import { EstateType } from '@sagi/core/types';

export const App = () => {
  const { data } = useQuery(EstatesQuery);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Text>
            {data?.estatesData.estates.map((estate: EstateType) => (
              <View style={styles.estateContainer}>
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
