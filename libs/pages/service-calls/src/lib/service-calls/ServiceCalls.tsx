import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, View } from 'react-native';

/* eslint-disable-next-line */
export interface ServiceCallsProps {
  route: {
    params: {
      estateID: string;
    };
  };
}

const serviceCallMock = {
  _id: '62c007ea79eb9685763c005c',
  estateID: '62b978d0f2e42cb6b0015d13',
  apartment: 6,
  description: 'נזילה',
  destination: '2022-08-24T17:07:11.513Z',
  priority: 'medium',
  assignee: 'שגיא',
  type: 'maintenance',
  images: [],
  createdAt: '2022-07-02T08:55:06.671Z',
  updatedAt: '2022-07-02T08:55:06.671Z',
};

export default function ServiceCalls(props: ServiceCallsProps) {
  const navigation = useNavigation();

  const { route } = props;

  const handleCreateServiceCallPress = useCallback(() => {
    return navigation.navigate(
      //@ts-ignore
      'service-call-create-form',
      { serviceCall: serviceCallMock }
      // route.params?.estateID && { estateID: route.params.estateID }
    );
  }, [navigation]);

  return (
    <View>
      <Button onPress={handleCreateServiceCallPress} title="צור קריאת שירות" />
    </View>
  );
}
