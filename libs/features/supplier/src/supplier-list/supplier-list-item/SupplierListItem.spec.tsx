import React from 'react';
import { render } from '@testing-library/react-native';

import SupplierListItem from './SupplierListItem';

describe('SupplierListItem', () => {
  it('should render successfully', () => {
    const { container } = render(<SupplierListItem />);
    expect(container).toBeTruthy();
  });
});
