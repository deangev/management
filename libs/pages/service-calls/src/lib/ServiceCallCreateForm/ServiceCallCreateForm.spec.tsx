import React from 'react';
import { render } from '@testing-library/react-native';

import ServiceCallCreateForm from './ServiceCallCreateForm';

describe('ServiceCallCreateForm', () => {
  it('should render successfully', () => {
    const { container } = render(<ServiceCallCreateForm />);
    expect(container).toBeTruthy();
  });
});
