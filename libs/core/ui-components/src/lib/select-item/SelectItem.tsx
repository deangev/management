import React, { memo } from 'react';
import { Select as NBSelect } from 'native-base';

export interface SelectItemProps {
  label: string
  value: string
}

export const SelectItem = memo(
  ({ label, value }: SelectItemProps) => (
    <NBSelect.Item label={label} value={value} />
  )
)
