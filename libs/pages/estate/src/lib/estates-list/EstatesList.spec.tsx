import React from 'react';
import { render } from '@testing-library/react-native';

import EstatesList from './EstatesList';

describe('EstatesList', () => {
  it('should render successfully', () => {
    const { container } = render(<EstatesList />);
    expect(container).toBeTruthy();
  });
});
