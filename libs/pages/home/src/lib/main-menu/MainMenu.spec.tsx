import React from 'react';
import { render } from '@testing-library/react-native';

import MainMenu from './MainMenu';

describe('MainMenu', () => {
  it('should render successfully', () => {
    const { container } = render(<MainMenu />);
    expect(container).toBeTruthy();
  });
});
