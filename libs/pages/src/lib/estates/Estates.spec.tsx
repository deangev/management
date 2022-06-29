import React from 'react';
import { render } from '@testing-library/react-native';

import Estates from './Estates';

describe('Estates', () => {
  it('should render successfully', () => {
    const { container } = render(<Estates />);
    expect(container).toBeTruthy();
  });
});
