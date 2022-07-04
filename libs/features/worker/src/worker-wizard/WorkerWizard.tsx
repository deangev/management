import React, { useLayoutEffect, useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';
import { useMutation } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import { WorkerType } from '@management/core/types';
import { getChangedFields } from '@management/core/utils';
import {
  createWorkerMutation,
  updateWorkerMutation,
} from '@management/graphql-services';

export interface WorkerWizardProps {
  route: {
    params?: { worker?: WorkerType };
  };
}

export function WorkerWizard({ route }: WorkerWizardProps) {
  const navigation = useNavigation();
  const [createWorker] = useMutation(createWorkerMutation);
  const [updateWorker] = useMutation(updateWorkerMutation);

  const [name, setName] = useState(route.params?.worker?.name || '');
  const [phoneNumber, setPhoneNumber] = useState(
    route.params?.worker?.phoneNumber || ''
  );

  useLayoutEffect(() => {
    if (route.params?.worker) {
      navigation.setOptions({
        title: 'ערוך עובד',
      });
    }
  }, [navigation, route.params?.worker]);

  const handleSubmit = async () => {
    try {
      const payload = {
        name,
        phoneNumber,
      };
      if (route.params?.worker) {
        const { name, phoneNumber } = payload;
        const formattedPayload = {
          name,
          phoneNumber,
        };

        const changedObj = getChangedFields(
          route.params?.worker,
          formattedPayload
        );

        await updateWorker({
          variables: { _id: route.params.worker._id, ...changedObj },
        });
      } else {
        await createWorker({
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
        onChangeText={setName}
        value={name}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        placeholder="Phone number"
      />
      <Button
        onPress={handleSubmit}
        title={route.params?.worker ? 'שמור' : 'צור'}
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

export default WorkerWizard;
