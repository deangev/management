import React from 'react';
import { render } from '@testing-library/react-native';

import ServiceCalls from './ServiceCalls';

describe('ServiceCalls', () => {
  it('should render successfully', () => {
    const { container } = render(<ServiceCalls />);
    expect(container).toBeTruthy();
  });
});
