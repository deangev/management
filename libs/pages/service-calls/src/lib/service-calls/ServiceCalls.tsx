import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, View } from 'react-native';

/* eslint-disable-next-line */
export interface ServiceCallsProps { }

export default function ServiceCalls(props: ServiceCallsProps) {
  const navigation = useNavigation()

  const handleCreateServiceCallPress = useCallback(() => {
    //@ts-ignore
    return navigation.navigate('service-call-create-form')
  }, [navigation])

  return (
    <View>
      <Button onPress={handleCreateServiceCallPress} title="צור קריאת שירות" />
    </View>
  )
}