import React from 'react';
import { useQuery } from '@apollo/client';
import { View, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { WorkerType } from '@management/core/types';
import { WorkerQuery } from '@management/graphql-services';

export interface WorkerProps {
  route: {
    params: { workerID: string };
  };
}

interface QueryType {
  workerData: WorkerType;
}

export function Worker({ route }: WorkerProps) {
  const { data } = useQuery<QueryType>(WorkerQuery, {
    variables: { workerID: route.params.workerID },
  });

  const navigation = useNavigation();

  if (!data) return <View></View>;

  const handleEditPress = () => {
    //@ts-ignore
    navigation.navigate('worker-wizard', {
      worker: data.workerData,
    });
  };

  const { name, phoneNumber } = data.workerData;

  return (
    <View>
      <Text>{name}</Text>
      <Text>{phoneNumber}</Text>
      <Button onPress={handleEditPress} title="ערוך עובד" />
    </View>
  );
}

export default Worker;
