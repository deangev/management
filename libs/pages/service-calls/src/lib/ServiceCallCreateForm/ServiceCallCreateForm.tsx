import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import { createServiceCallMutation } from '@sagi/graphql-services'
import { View, TextInput, StyleSheet, Button } from 'react-native';


/* eslint-disable-next-line */
export interface ServiceCallCreateFormProps { }

export default function ServiceCallCreateForm(props: ServiceCallCreateFormProps) {
  const navigation = useNavigation()

  const [createServiceCall] = useMutation(createServiceCallMutation)

  const [description, setDescription] = useState('')
  const [destination, setDestination] = useState('')

  const handleCreatePress = async () => {
    try {
      const payload = {
        estateId: '62b5f51b4360c66ccd4b860e',
        type: '',
        description,
        destination
      }

      await createServiceCall({ variables: payload })
      navigation.goBack()

    } catch (err) {
      console.error(err)
    }
  }

  return (
    <View>
      <TextInput
        placeholder='תיאור'
        style={styles.input}
        value={description}
        onChangeText={setDescription} />
      <TextInput
        placeholder='יעד לביצוע'
        style={styles.input}
        value={destination}
        onChangeText={setDestination} />

      <Button title="צור" onPress={handleCreatePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    direction: 'rtl'
  },
});