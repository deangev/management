import { useQuery } from '@apollo/client';
import { useRefetchListener } from '@management/core/hooks';
import { WorkerType } from '@management/core/types';
import { VirtualizedList } from '@management/core/ui-components';
import { WorkersQuery } from '@management/graphql-services';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { View, Text, Button } from 'react-native';
import WorkerListItem, {
  WorkerListItemProps,
} from './worker-list-item/WorkerListItem';

type WorkersData = {
  workersData: {
    workers: WorkerType[];
  };
};

/* eslint-disable-next-line */
export interface WorkerListProps {}

export function WorkerList(props: WorkerListProps) {
  const navigation = useNavigation();
  const { data, refetch } = useQuery<WorkersData>(WorkersQuery, {
    fetchPolicy: 'no-cache',
  });

  useRefetchListener({ refetch });

  const handleAddPress = () => {
    //@ts-ignore
    navigation.navigate('worker-wizard');
  };

  return (
    <View>
      <Button onPress={handleAddPress} title="הוסף עובד חדש" />
      {!!data?.workersData.workers && (
        <VirtualizedList
          data={data.workersData.workers}
          renderItem={({ item }: WorkerListItemProps) => (
            <WorkerListItem key={item.item._id} item={item} />
          )}
        />
      )}
    </View>
  );
}

export default WorkerList;
