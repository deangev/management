import React from 'react';
import { render } from '@testing-library/react-native';

import MainMenuItem from './MainMenuItem';

describe('MainMenuItem', () => {
  it('should render successfully', () => {
    const { container } = render(<MainMenuItem />);
    expect(container).toBeTruthy();
  });
});
