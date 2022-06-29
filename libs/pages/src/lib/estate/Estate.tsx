import { useQuery } from '@apollo/client';
import { EstateQuery } from '@sagi/graphql-services';
import React from 'react';

import { View, Text } from 'react-native';

/* eslint-disable-next-line */
export interface EstateProps {
  route: {
    params: { estateId: string };
  };
}

export function Estate({ route }: EstateProps) {
  const { data } = useQuery(EstateQuery, {
    variables: { estateId: route.params.estateId },
  });

  return (
    <View>
      <Text>{data?.estateData.address.city}</Text>
      <Text>{data?.estateData.address.street}</Text>
      <Text>{data?.estateData.address.number}</Text>
    </View>
  );
}

export default Estate;
