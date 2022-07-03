import React, { memo, ReactNode } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Box } from 'native-base';
import { IconType } from '@management/core/icons';
import Icon from '../icon/Icon';

export interface ListItemProps {
  startIcon: IconType;
  children: ReactNode;
  onPress: any;
}

export const ListItem = memo(
  ({ startIcon, children, onPress }: ListItemProps) => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.itemWrapper}>
        <Box
          borderBottomWidth="1"
          _dark={{
            borderColor: 'gray.600',
          }}
          borderColor="coolGray.200"
          style={styles.itemContainer}
        >
          {startIcon && <Icon icon={startIcon} size={30} />}
          <View style={styles.contentContainer}>{children}</View>
        </Box>
      </TouchableOpacity>
    );
  }
);

const styles = StyleSheet.create({
  contentContainer: {
    paddingLeft: 10,
  },
  itemWrapper: {
    height: 90,
    width: '100%',
  },
  itemContainer: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
});

export default ListItem;
