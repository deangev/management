import React, { useLayoutEffect, useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';
import { useMutation } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import { SupplierType } from '@management/core/types';
import { getChangedFields } from '@management/core/utils';
import {
  createSupplierMutation,
  updateSupplierMutation,
} from '@management/graphql-services';

export interface SupplierWizardProps {
  route: {
    params?: { supplier?: SupplierType };
  };
}

export function SupplierWizard({ route }: SupplierWizardProps) {
  const navigation = useNavigation();
  const [createSupplier] = useMutation(createSupplierMutation);
  const [updateSupplier] = useMutation(updateSupplierMutation);

  const [name, setName] = useState(route.params?.supplier?.name || '');
  const [phoneNumber, setPhoneNumber] = useState(
    route.params?.supplier?.phoneNumber || ''
  );

  useLayoutEffect(() => {
    if (route.params?.supplier) {
      navigation.setOptions({
        title: 'ערוך ספק',
      });
    }
  }, [navigation, route.params?.supplier]);

  const handleSubmit = async () => {
    try {
      const payload = {
        name,
        phoneNumber,
      };
      if (route.params?.supplier) {
        const { name, phoneNumber } = payload;
        const formattedPayload = {
          name,
          phoneNumber,
        };

        const changedObj = getChangedFields(
          route.params?.supplier,
          formattedPayload
        );

        await updateSupplier({
          variables: { _id: route.params.supplier._id, ...changedObj },
        });
      } else {
        await createSupplier({
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
        title={route.params?.supplier ? 'שמור' : 'צור'}
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

export default SupplierWizard;
