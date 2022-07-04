import React, { memo, ReactNode } from 'react';
import { Select as NBSelect } from 'native-base';
import { StyleSheet } from 'react-native';

export interface SelectProps {
  onOpen?: any
  placeholder: string
  children: ReactNode
  onValueChange: any
}

export const Select = memo(
  ({ placeholder, onValueChange, onOpen, children }: SelectProps) => (
    <NBSelect
      placeholder={placeholder}
      onOpen={onOpen}
      onValueChange={onValueChange}
    >
      {children}
    </NBSelect>
  )
)

const styles = StyleSheet.create({

})