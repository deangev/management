import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import { createServiceCallMutation } from '@sagi/graphql-services'
import { View, TextInput, StyleSheet, Button, Text } from 'react-native';
import { FormControl } from 'native-base';

/* eslint-disable-next-line */
export interface ServiceCallCreateFormProps {
  route: {
    params: {
      estateID: string
    }
  }
}

export default function ServiceCallCreateForm(props: ServiceCallCreateFormProps) {
  const { route } = props
  const navigation = useNavigation()
  const [createServiceCall] = useMutation(createServiceCallMutation)

  const [apartment, setApartment] = useState('')
  const [description, setDescription] = useState('')
  const [destination, setDestination] = useState('')
  const [priority, setPriority] = useState('')
  const [assignee, setAssignee] = useState('')
  const [note, setNote] = useState('')
  const [type, setType] = useState('')

  const handleCreatePress = async () => {
    try {
      const payload = {
        estateId: route.params.estateID,
        apartment,
        description,
        destination,
        priority,
        assignee,
        note,
        type,
        images: ['abc']
      }

      console.log(payload);
      

      await createServiceCall({ variables: payload })
      navigation.goBack()

    } catch (err) {
      console.error(err)
    }
  }

  return (
    <View>
      <FormControl>
        <Text>{`estateID: ${route.params.estateID}`}</Text>

        <FormControl.Label style={styles.formFieldLabel}>דירה</FormControl.Label>
        <TextInput
          placeholder='דירה'
          style={styles.textInput}
          value={apartment}
          onChangeText={setApartment} />

        <FormControl.Label style={styles.formFieldLabel}>תיאור</FormControl.Label>
        <TextInput
          placeholder='תיאור'
          style={styles.textInput}
          value={description}
          onChangeText={setDescription} />

        <FormControl.Label style={styles.formFieldLabel}>יעד</FormControl.Label>
        <TextInput
          placeholder='יעד לביצוע'
          style={styles.textInput}
          value={destination}
          onChangeText={setDestination} />

        <FormControl.Label style={styles.formFieldLabel}>עדיפות</FormControl.Label>
        <TextInput
          placeholder='עדיפות'
          style={styles.textInput}
          value={priority}
          onChangeText={setPriority} />

        <FormControl.Label style={styles.formFieldLabel}>אחראי</FormControl.Label>
        <TextInput
          placeholder='אחראי'
          style={styles.textInput}
          value={assignee}
          onChangeText={setAssignee} />

        <FormControl.Label style={styles.formFieldLabel}>פתק</FormControl.Label>
        <TextInput
          placeholder='פתק'
          style={styles.textInput}
          value={note}
          onChangeText={setNote} />

        <FormControl.Label style={styles.formFieldLabel}>סוג</FormControl.Label>
        <TextInput
          placeholder='סוג'
          style={styles.textInput}
          value={type}
          onChangeText={setType} />

      </FormControl>

      <Button title="צור" onPress={handleCreatePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  formFieldLabel: {
    direction: 'rtl'
  }
});