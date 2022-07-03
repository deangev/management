import React, { useCallback, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, View, VirtualizedList } from 'react-native';
import { useLazyQuery } from '@apollo/client';
import {
  EstateServiceCallsQuery,
  ServiceCallsQuery,
} from '@management/graphql-services';
import { ServiceCallType } from '@management/core/types';
import ServiceCallListItem from '../serviceCallListItem/ServiceCallListItem';

export interface ServiceCallsProps {
  route: {
    params: {
      estateID: string;
    };
  };
}

export default function ServiceCalls(props: ServiceCallsProps) {
  const { route } = props;
  const navigation = useNavigation();

  const [getServiceCalls, { data }] = useLazyQuery(ServiceCallsQuery, {
    fetchPolicy: 'no-cache',
  });
  const [getEstateServiceCalls, { data: estateData }] = useLazyQuery(
    EstateServiceCallsQuery,
    { fetchPolicy: 'no-cache' }
  );

  useEffect(() => {
    if (route.params?.estateID)
      getEstateServiceCalls({ variables: { estateID: route.params.estateID } });
    else getServiceCalls();
  }, [getEstateServiceCalls, getServiceCalls, route.params]);

  const handleCreateServiceCallPress = useCallback(() => {
    return navigation.navigate(
      //@ts-ignore
      'service-call-create-form',
      route.params?.estateID && { estateID: route.params.estateID }
    );
  }, [navigation, route.params]);

  const renderList = (data: any) => {
    return (
      <VirtualizedList
        data={data}
        initialNumToRender={4}
        renderItem={({ item, index }) => (
          <ServiceCallListItem item={item} index={index} />
        )}
        keyExtractor={(item) => item.key}
        getItemCount={(data) => data.length}
        getItem={getItem}
      />
    );
  };

  return (
    <View>
      <Button onPress={handleCreateServiceCallPress} title="צור קריאת שירות" />

      {!!data?.serviceCallsData.serviceCalls &&
        renderList(data.serviceCallsData.serviceCalls as ServiceCallType[])}

      {!!estateData?.estateServiceCallsData.serviceCalls &&
        renderList(
          estateData.estateServiceCallsData.serviceCalls as ServiceCallType[]
        )}
    </View>
  );
}

const getItem = (data: ServiceCallType[], index: number) => ({
  key: Math.random().toString(12).substring(0),
  serviceCall: data[index],
});
