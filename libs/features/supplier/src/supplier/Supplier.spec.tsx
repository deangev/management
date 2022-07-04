
import React from 'react';
import { render } from '@testing-library/react-native';

import Supplier from './Supplier';

describe('Supplier', () => {
  it('should render successfully', () => {
    const { container } = render(<Supplier />);
    expect(container).toBeTruthy();
  });
});
