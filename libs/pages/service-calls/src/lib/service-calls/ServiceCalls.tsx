import React, { useCallback, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, View, VirtualizedList } from 'react-native';
import { useQuery } from '@apollo/client';
import { ServiceCallsQuery } from '@management/graphql-services';
import { ServiceCallType } from '@management/core/types';
import ServiceCallListItem from '../serviceCallListItem/ServiceCallListItem';

/* eslint-disable-next-line */
export interface ServiceCallsProps {
  route: {
    params: {
      estateID: string
    }
  }
}

export default function ServiceCalls(props: ServiceCallsProps) {
  const navigation = useNavigation()
  const { data, refetch } = useQuery(ServiceCallsQuery, { fetchPolicy: 'no-cache' });

  const { route } = props

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (refetch) {
        refetch();
      }
    });

    return unsubscribe;
  }, [navigation, refetch]);

  const handleCreateServiceCallPress = useCallback(() => {
    //@ts-ignore
    return navigation.navigate('service-call-create-form', route.params?.estateID && { estateID: route.params.estateID })
  }, [navigation])

  return (
    <View>
      <Button onPress={handleCreateServiceCallPress} title="צור קריאת שירות" />
      {!!data?.serviceCallsData.serviceCalls && (
        <VirtualizedList
          data={data.serviceCallsData.serviceCalls as ServiceCallType[]}
          initialNumToRender={4}
          renderItem={({ item, index }) => (
            <ServiceCallListItem item={item} index={index} />
          )}
          keyExtractor={(item) => item.key}
          getItemCount={(data) => data.length}
          getItem={getItem}
        />
      )}
    </View>
  )
}

const getItem = (data: ServiceCallType[], index: number) => ({
  key: Math.random().toString(12).substring(0),
  serviceCall: data[index],
});