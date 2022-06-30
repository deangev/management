import React from 'react';
import { render } from '@testing-library/react-native';

import MenuIconItem from './MenuIconItem';

describe('MenuIconItem', () => {
  it('should render successfully', () => {
    const { container } = render(<MenuIconItem />);
    expect(container).toBeTruthy();
  });
});
