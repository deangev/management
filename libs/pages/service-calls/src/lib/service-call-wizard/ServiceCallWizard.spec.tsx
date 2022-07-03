import React from 'react';
import { render } from '@testing-library/react-native';

import ServiceCallWizard from './ServiceCallWizard';

describe('ServiceCallWizard', () => {
  it('should render successfully', () => {
    const { container } = render(<ServiceCallWizard />);
    expect(container).toBeTruthy();
  });
});
