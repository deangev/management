import React from 'react';
import { render } from '@testing-library/react-native';

import EstateMenuItem from './EstateMenuItem';

describe('EstateMenuItem', () => {
  it('should render successfully', () => {
    const { container } = render(<EstateMenuItem />);
    expect(container).toBeTruthy();
  });
});
