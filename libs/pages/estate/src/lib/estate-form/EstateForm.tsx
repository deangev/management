import { useMutation } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import { EstateType } from '@management/core/types';
import { getChangedFields } from '@management/core/utils';
import {
  createEstateMutation,
  updateEstateMutation,
} from '@management/graphql-services';
import React, { useLayoutEffect, useReducer, useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';

/* eslint-disable-next-line */
export interface EstateFormProps {
  route: {
    params?: { estate?: EstateType };
  };
}

export function EstateForm({ route }: EstateFormProps) {
  const navigation = useNavigation();
  const [createEstate] = useMutation(createEstateMutation);
  const [updateEstate] = useMutation(updateEstateMutation);

  const [city, setCity] = useState(route.params?.estate?.address.city || '');
  const [street, setStreet] = useState(
    route.params?.estate?.address.street || ''
  );
  const [number, setNumber] = useState(
    route.params?.estate?.address.number || ''
  );
  const [entry, setEntry] = useState(route.params?.estate?.address.entry || '');
  const [floors, setFloors] = useState(route.params?.estate?.floors || '');
  const [apartments, setApartments] = useState(
    route.params?.estate?.apartments || ''
  );

  useLayoutEffect(() => {
    if (route.params?.estate) {
      navigation.setOptions({
        title: 'ערוך בניין',
      });
    }
  }, [navigation, route.params?.estate]);
  const handleSubmitEstate = async () => {
    try {
      const payload = {
        city,
        street,
        number: Number(number),
        entry: Number(entry),
        floors: Number(floors),
        apartments: Number(apartments),
      };
      if (route.params?.estate) {
        const { apartments, floors, ...rest } = payload;
        const formattedPayload = {
          address: { ...rest },
          apartments,
          floors,
        };
        //extract only the changed values
        const changedObj = getChangedFields(
          route.params?.estate,
          formattedPayload
        );

        await updateEstate({
          variables: { _id: route.params.estate._id, ...changedObj },
        });
      } else {
        await createEstate({
          variables: payload,
        });
      }
      navigation.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={setCity}
        value={city}
        placeholder="City"
      />
      <TextInput
        style={styles.input}
        onChangeText={setStreet}
        value={street}
        placeholder="Street"
      />
      <TextInput
        style={styles.input}
        onChangeText={setNumber}
        value={String(number)}
        placeholder="Number"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={setEntry}
        value={String(entry)}
        placeholder="Entry"
      />
      <TextInput
        style={styles.input}
        onChangeText={setFloors}
        value={String(floors)}
        placeholder="Floors"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={setApartments}
        value={String(apartments)}
        placeholder="Apartments"
        keyboardType="numeric"
      />
      <Button
        onPress={handleSubmitEstate}
        title={route.params?.estate ? 'שמור' : 'צור'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default EstateForm;
