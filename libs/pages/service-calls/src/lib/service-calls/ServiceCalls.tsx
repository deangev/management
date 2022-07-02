import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, View } from 'react-native';

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

  const { route } = props

  const handleCreateServiceCallPress = useCallback(() => {
    //@ts-ignore
    return navigation.navigate('service-call-create-form', route.params?.estateID && {estateID: route.params.estateID})
  }, [navigation])

  return (
    <View>
      <Button onPress={handleCreateServiceCallPress} title="צור קריאת שירות" />
    </View>
  )
}