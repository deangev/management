import React from 'react';
import { useQuery } from '@apollo/client';
import { ServiceCallType } from '@management/core/types';
import { ServiceCallQuery } from '@management/graphql-services';

import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

/* eslint-disable-next-line */
export interface ServiceCallProps {
  route: {
    params: { serviceCallID: string };
  };
}

interface QueryType {
  serviceCallData: ServiceCallType;
}

export function ServiceCall(props: ServiceCallProps) {
  const navigation = useNavigation();
  const { data } = useQuery<QueryType>(ServiceCallQuery, {
    variables: { serviceCallID: props.route.params.serviceCallID },
  });

  const handleEditPress = () => {
    //@ts-ignore
    navigation.navigate('service-call-create-form', {
      serviceCall: data?.serviceCallData,
    });
  };

  return (
    <View>
      <Button onPress={handleEditPress} title="ערוך בניין" />

      <Text>Welcome to serviceCall!</Text>
      <Text>{props.route.params.serviceCallID}</Text>
      <Text>{data?.serviceCallData.type}</Text>
      <Text>{data?.serviceCallData.description}</Text>
    </View>
  );
}

export default ServiceCall;
