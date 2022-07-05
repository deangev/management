import React from 'react';
import { render } from '@testing-library/react-native';

import ServiceCallList from './ServiceCallList';

describe('ServiceCallList', () => {
  it('should render successfully', () => {
    const { container } = render(<ServiceCallList />);
    expect(container).toBeTruthy();
  });
});
