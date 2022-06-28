import { useMutation } from '@apollo/client';
import { updateEstateMutation } from '@sagi/graphql-services';
import React, { useCallback, useState } from 'react';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

/* eslint-disable-next-line */
export interface UpdateEstateProps {
  estateId: string;
  getEstates: () => void;
}

export function UpdateEstate({ estateId, getEstates }: UpdateEstateProps) {
  const [updateEstate] = useMutation(updateEstateMutation);
  const [city, setCity] = useState('');

  const handleUpdateEstate = async () => {
    await updateEstate({ variables: { _id: estateId, city } });
    await getEstates();
  };

  return (
    <View>
      <Text>Update first estate city: </Text>
      <TextInput
        style={styles.input}
        onChangeText={setCity}
        value={city}
        placeholder="City"
      />
      <TouchableOpacity style={styles.button} onPress={handleUpdateEstate}>
        <Text>Update First Estate</Text>
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

export default UpdateEstate;
