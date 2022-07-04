import React from 'react';
import { useQuery } from '@apollo/client';
import { View, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SupplierType } from '@management/core/types';
import { SupplierQuery } from '@management/graphql-services';

export interface SupplierProps {
  route: {
    params: { supplierID: string };
  };
}

interface QueryType {
  supplierData: SupplierType;
}

export function Supplier({ route }: SupplierProps) {
  const { data } = useQuery<QueryType>(SupplierQuery, {
    variables: { supplierID: route.params.supplierID },
  });

  const navigation = useNavigation();

  if (!data) return <View></View>;

  const handleEditPress = () => {
    //@ts-ignore
    navigation.navigate('supplier-wizard', {
      supplier: data.supplierData,
    });
  };

  const { name, phoneNumber } = data.supplierData;

  return (
    <View>
      <Text>{name}</Text>
      <Text>{phoneNumber}</Text>
      <Button onPress={handleEditPress} title="ערוך ספק" />
    </View>
  );
}

export default Supplier;
