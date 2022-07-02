import React from 'react';
import { useQuery } from '@apollo/client';
import { ServiceCallType } from '@management/core/types';
import { ServiceCallQuery } from '@management/graphql-services';

import { View, Text } from 'react-native';

/* eslint-disable-next-line */
export interface ServiceCallProps {
  route: {
    params: { serviceCallID: string };
  }
}

interface QueryType {
  serviceCallData: ServiceCallType;
}

export function ServiceCall(props: ServiceCallProps) {
  const { data } = useQuery<QueryType>(ServiceCallQuery, {
    variables: { serviceCallID: props.route.params.serviceCallID }
  })

  return (
    <View>
      <Text>Welcome to serviceCall!</Text>
      <Text>{props.route.params.serviceCallID}</Text>
      <Text>{data?.serviceCallData.type}</Text>
      <Text>{data?.serviceCallData.description}</Text>
    </View>
  );
}

export default ServiceCall;
