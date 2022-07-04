import React from 'react';
import { render } from '@testing-library/react-native';

import WorkerList from './SupplierList';

describe('WorkerList', () => {
  it('should render successfully', () => {
    const { container } = render(<WorkerList />);
    expect(container).toBeTruthy();
  });
});
