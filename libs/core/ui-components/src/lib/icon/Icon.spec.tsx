import React from 'react';
import { render } from '@testing-library/react-native';

import Icon from './Icon';

describe('Icon', () => {
  it('should render successfully', () => {
    const { container } = render(<Icon />);
    expect(container).toBeTruthy();
  });
});
