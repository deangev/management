import React, { useMemo, useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import {
  createServiceCallMutation,
  updateServiceCallMutation,
} from '@management/graphql-services';
import { View, TextInput, StyleSheet, Button, Text } from 'react-native';
import { FormControl } from 'native-base';
import { ServiceCallType } from '@management/core/types';

export interface ServiceCallWizardProps {
  route: {
    params: {
      estateID?: string;
      serviceCall?: ServiceCallType;
    };
  };
}

export default function ServiceCallWizard(
  props: ServiceCallWizardProps
) {
  const navigation = useNavigation();
  const [createServiceCall] = useMutation(createServiceCallMutation);
  const [updateServiceCall] = useMutation(updateServiceCallMutation);

  const [apartment, setApartment] = useState(
    props.route.params.serviceCall?.apartment || ''
  );
  const [description, setDescription] = useState(
    props.route.params.serviceCall?.description || ''
  );
  const [destination, setDestination] = useState(
    props.route.params.serviceCall?.destination || ''
  );
  const [priority, setPriority] = useState(
    props.route.params.serviceCall?.priority || ''
  );
  const [assignee, setAssignee] = useState(
    props.route.params.serviceCall?.assignee || ''
  );
  const [note, setNote] = useState(props.route.params.serviceCall?.note || '');
  const [type, setType] = useState(props.route.params.serviceCall?.type || '');

  const estateID = useMemo(() => {
    const { estateID, serviceCall } = props?.route?.params || {};
    return serviceCall?.estateID || estateID;
  }, [props.route]);

  const handlePress = async () => {
    try {
      const payload = {
        estateID,
        apartment: apartment
          ? typeof apartment === 'string' && Number(apartment)
          : null,
        description,
        destination,
        priority,
        assignee,
        note,
        type,
        images: ['abc'],
      };

      const submitFn = estateID ? createServiceCall : updateServiceCall;
      await submitFn({ variables: payload });
      
      navigation.goBack();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View>
      <FormControl>
        <Text>{`estateID: ${estateID}`}</Text>

        <FormControl.Label style={styles.formFieldLabel}>
          דירה
        </FormControl.Label>
        <TextInput
          placeholder="דירה"
          style={styles.textInput}
          value={String(apartment)}
          onChangeText={setApartment}
          keyboardType="numeric"
        />

        <FormControl.Label style={styles.formFieldLabel}>
          תיאור
        </FormControl.Label>
        <TextInput
          placeholder="תיאור"
          style={styles.textInput}
          value={description}
          onChangeText={setDescription}
        />

        <FormControl.Label style={styles.formFieldLabel}>יעד</FormControl.Label>
        <TextInput
          placeholder="יעד לביצוע"
          style={styles.textInput}
          value={destination}
          onChangeText={setDestination}
        />

        <FormControl.Label style={styles.formFieldLabel}>
          עדיפות
        </FormControl.Label>
        <TextInput
          placeholder="עדיפות"
          style={styles.textInput}
          value={priority}
          onChangeText={setPriority}
        />

        <FormControl.Label style={styles.formFieldLabel}>
          אחראי
        </FormControl.Label>
        <TextInput
          placeholder="אחראי"
          style={styles.textInput}
          value={assignee}
          onChangeText={setAssignee}
        />

        <FormControl.Label style={styles.formFieldLabel}>פתק</FormControl.Label>
        <TextInput
          placeholder="פתק"
          style={styles.textInput}
          value={note}
          onChangeText={setNote}
        />

        <FormControl.Label style={styles.formFieldLabel}>סוג</FormControl.Label>
        <TextInput
          placeholder="סוג"
          style={styles.textInput}
          value={type}
          onChangeText={setType}
        />
      </FormControl>

      <Button title="צור" onPress={handlePress} />
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
    direction: 'rtl',
  },
});
