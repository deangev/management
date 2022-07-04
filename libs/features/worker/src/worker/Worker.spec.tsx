
import React from 'react';
import { render } from '@testing-library/react-native';

import Worker from './Worker';

describe('Worker', () => {
  it('should render successfully', () => {
    const { container } = render(<Worker />);
    expect(container).toBeTruthy();
  });
});
