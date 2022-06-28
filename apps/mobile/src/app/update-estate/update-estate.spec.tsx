import React from 'react';
import { render } from '@testing-library/react-native';

import UpdateEstate from './update-estate';

describe('UpdateEstate', () => {
  it('should render successfully', () => {
    const { container } = render(<UpdateEstate />);
    expect(container).toBeTruthy();
  });
});
