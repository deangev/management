import React, { useCallback } from 'react';
import { ServiceCallType } from '@management/core/types';
import { Icon } from '@management/core/ui-components';
import { Box } from 'native-base';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export interface ServiceCallListItemProps {
  item: { serviceCall: ServiceCallType }
  index: number
}

export function ServiceCallListItem(props: ServiceCallListItemProps) {
  const { item: { serviceCall }, index } = props
  const navigation = useNavigation()

  const handleServiceCallPress = useCallback((serviceCallID: string) => {
    //@ts-ignore
    navigation.navigate('service-call', {
      serviceCallID,
    });
  }, [navigation])

  return (
    serviceCall &&
    <TouchableOpacity
      key={index}
      onPress={() => handleServiceCallPress(serviceCall._id)}
      style={styles.serviceCallContainer}
    >
      <Box
        borderBottomWidth="1"
        _dark={{
          borderColor: 'gray.600',
        }}
        borderColor="coolGray.200"
        pl="2"
        pr="3"
        py="0.5"
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <Icon icon="service" size={30} />
        <Text style={{ paddingLeft: 10 }}>
          {serviceCall.type} {serviceCall.description}
        </Text>
      </Box>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  serviceCallContainer: {
    height: 90,
    width: '100%',
  },
});

export default ServiceCallListItem;
