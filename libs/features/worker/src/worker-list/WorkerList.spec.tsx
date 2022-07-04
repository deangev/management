import React from 'react';
import { render } from '@testing-library/react-native';

import WorkerList from './WorkerList';

describe('WorkerList', () => {
  it('should render successfully', () => {
    const { container } = render(<WorkerList />);
    expect(container).toBeTruthy();
  });
});
