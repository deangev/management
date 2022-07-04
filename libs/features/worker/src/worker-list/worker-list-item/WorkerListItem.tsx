import React, { useCallback } from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { WorkerType } from '@management/core/types';
import { ListItem } from '@management/core/ui-components';

export interface WorkerListItemProps {
  item: { item: WorkerType };
}

export function WorkerListItem({
  item: {
    item: { _id, name, phoneNumber },
  },
}: WorkerListItemProps) {
  const navigation = useNavigation();
  const handleWorkerPress = useCallback(() => {
    //@ts-ignore
    navigation.navigate('worker', {
      workerID: _id,
    });
  }, [navigation, _id]);

  return (
    <ListItem onPress={handleWorkerPress} startIcon="workers">
      <Text>
        {name} - {phoneNumber}
      </Text>
    </ListItem>
  );
}

export default WorkerListItem;
