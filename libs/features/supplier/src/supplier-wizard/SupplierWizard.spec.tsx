import React from 'react';
import { render } from '@testing-library/react-native';

import SupplierWizard from './SupplierWizard';

describe('SupplierWizard', () => {
  it('should render successfully', () => {
    const { container } = render(<SupplierWizard />);
    expect(container).toBeTruthy();
  });
});
