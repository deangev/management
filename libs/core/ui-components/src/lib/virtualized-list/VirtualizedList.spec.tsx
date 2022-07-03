import React from 'react';
import { render } from '@testing-library/react-native';

import VirtualizedList from './VirtualizedList';

describe('VirtualizedList', () => {
  it('should render successfully', () => {
    const { container } = render(<VirtualizedList />);
    expect(container).toBeTruthy();
  });
});
