import React from 'react';
import { render } from '@testing-library/react-native';

import EstateForm from './EstateForm';

describe('EstateForm', () => {
  it('should render successfully', () => {
    const { container } = render(<EstateForm />);
    expect(container).toBeTruthy();
  });
});
