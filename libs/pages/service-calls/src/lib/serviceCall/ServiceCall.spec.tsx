import React from 'react';
import { render } from '@testing-library/react-native';

import ServiceCall from './ServiceCall';

describe('ServiceCall', () => {
  it('should render successfully', () => {
    const { container } = render(<ServiceCall />);
    expect(container).toBeTruthy();
  });
});
