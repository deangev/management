import React from 'react';
import { VirtualizedList as NativeVirtualizedList } from 'react-native';

export interface VirtualizedListProps {
  data: any[];
  initialNumToRender?: number;
  renderItem: ({ item, index }: { item: any; index: number }) => JSX.Element;
}

export function VirtualizedList({
  data,
  initialNumToRender,
  renderItem,
}: VirtualizedListProps) {
  return (
    <NativeVirtualizedList
      data={data}
      initialNumToRender={initialNumToRender}
      renderItem={renderItem}
      keyExtractor={(item: any) => item.key}
      getItemCount={(data: any[]) => data.length}
      getItem={getItem}
    />
  );
}

const getItem = (data: any[], index: number) => ({
  key: Math.random().toString(12).substring(0),
  item: data[index],
});

VirtualizedList.defaultValues = {
  VirtualizedList: 4,
};

export default VirtualizedList;
