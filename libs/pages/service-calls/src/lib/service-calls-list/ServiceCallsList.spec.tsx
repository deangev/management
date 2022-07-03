import React from 'react';
import { render } from '@testing-library/react-native';

import ServiceCallsList from './ServiceCallsList';

describe('ServiceCallsList', () => {
  it('should render successfully', () => {
    const { container } = render(<ServiceCallsList />);
    expect(container).toBeTruthy();
  });
});
