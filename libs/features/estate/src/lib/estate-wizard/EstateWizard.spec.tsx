import React from 'react';
import { render } from '@testing-library/react-native';

import EstateWizard from './EstateWizard';

describe('EstateWizard', () => {
  it('should render successfully', () => {
    const { container } = render(<EstateWizard />);
    expect(container).toBeTruthy();
  });
});
