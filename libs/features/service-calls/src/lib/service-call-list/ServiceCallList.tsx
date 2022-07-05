import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, View } from 'react-native';
import { useQuery } from '@apollo/client';
import { ServiceCallsQuery } from '@management/graphql-services';
import { ServiceCallType } from '@management/core/types';
import ServiceCallListItem from './service-call-list-item/ServiceCallListItem';
import { VirtualizedList } from '@management/core/ui-components';
import { useRefetchListener } from '@management/core/hooks';

export interface ServiceCallListProps {
  route: {
    params: {
      estateID: string;
    };
  };
}

type ServiceCallData = {
  serviceCallsData: { serviceCalls: ServiceCallType[] };
};

export default function ServiceCallList({
  route: { params },
}: ServiceCallListProps) {
  const navigation = useNavigation();

  const { data, refetch } = useQuery<ServiceCallData>(ServiceCallsQuery, {
    variables: { estateID: params?.estateID || null },
    fetchPolicy: 'no-cache',
  });

  useRefetchListener({ refetch });

  const handleCreateServiceCallPress = useCallback(() => {
    return navigation.navigate(
      //@ts-ignore
      'service-call-wizard',
      { estateID: params?.estateID }
    );
  }, [navigation, params]);

  return (
    <View>
      <Button onPress={handleCreateServiceCallPress} title="צור קריאת שירות" />

      {data?.serviceCallsData.serviceCalls && (
        <VirtualizedList
          data={data.serviceCallsData.serviceCalls}
          renderItem={({ item }) => (
            <ServiceCallListItem key={item._id} item={item} />
          )}
        />
      )}
    </View>
  );
}
