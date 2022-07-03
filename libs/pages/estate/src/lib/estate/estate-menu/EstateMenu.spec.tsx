import React from 'react';
import { render } from '@testing-library/react-native';

import EstateMenu from './EstateMenu';

describe('EstateMenu', () => {
  it('should render successfully', () => {
    const { container } = render(<EstateMenu />);
    expect(container).toBeTruthy();
  });
});
