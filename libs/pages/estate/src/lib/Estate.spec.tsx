import React from 'react';
import { render } from '@testing-library/react-native';

import Estate from './Estate';

describe('Estate', () => {
  it('should render successfully', () => {
    const { container } = render(<Estate />);
    expect(container).toBeTruthy();
  });
});
