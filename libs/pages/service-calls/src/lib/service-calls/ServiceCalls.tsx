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

type ServiceCallData = {
  serviceCallsData: { serviceCalls: ServiceCallType[] };
};

type EstateServiceCallData = {
  estateServiceCallsData: { serviceCalls: ServiceCallType[] };
};

export default function ServiceCalls(props: ServiceCallsProps) {
  const { route } = props;
  const navigation = useNavigation();

  const [getServiceCalls, { data }] = useLazyQuery<ServiceCallData>(
    ServiceCallsQuery,
    {
      fetchPolicy: 'no-cache',
    }
  );
  const [getEstateServiceCalls, { data: estateData }] =
    useLazyQuery<EstateServiceCallData>(EstateServiceCallsQuery, {
      fetchPolicy: 'no-cache',
    });

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

  const renderList = (data: ServiceCallType[]) => {
    if (!data.length) return null;
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

      {renderList(data?.serviceCallsData.serviceCalls || [])}
      {renderList(estateData?.estateServiceCallsData.serviceCalls || [])}
    </View>
  );
}

const getItem = (data: ServiceCallType[], index: number) => ({
  key: Math.random().toString(12).substring(0),
  serviceCall: data[index],
});
