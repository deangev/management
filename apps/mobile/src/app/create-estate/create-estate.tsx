import { useMutation } from '@apollo/client';
import { createEstateMutation } from '@sagi/graphql-services';
import React, { useCallback, useEffect, useState } from 'react';

import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

/* eslint-disable-next-line */
export interface CreateEstateProps {
  getEstates: () => void;
}

export function CreateEstate({ getEstates }: CreateEstateProps) {
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [entry, setEntry] = useState('');
  const [floors, setFloors] = useState('');
  const [apartments, setApartments] = useState('');
  const [createEstate, { loading, data }] = useMutation(createEstateMutation);

  useEffect(() => {
    const getEstatesData = async () => {
      if (!loading && data) await getEstates();
    };
    getEstatesData();
  }, [loading, data, getEstates]);

  const handleCreateEstate = async () => {
    try {
      const payload = {
        city,
        street,
        number: Number(number),
        entry: Number(entry),
        floors: Number(floors),
        apartments: Number(apartments),
      };

      await createEstate({
        variables: payload,
      });
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) return <Text>Loading</Text>;
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
        value={number}
        placeholder="Number"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={setEntry}
        value={entry}
        placeholder="Entry"
      />
      <TextInput
        style={styles.input}
        onChangeText={setFloors}
        value={floors}
        placeholder="Floors"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={setApartments}
        value={apartments}
        placeholder="Apartments"
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={handleCreateEstate}>
        <Text>Create Estate</Text>
      </TouchableOpacity>
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
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '50%',
    margin: 0,
  },
});

export default CreateEstate;
