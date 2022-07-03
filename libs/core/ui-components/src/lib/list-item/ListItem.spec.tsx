import React from 'react';
import { render } from '@testing-library/react-native';

import ListItem from './ListItem';

describe('ListItem', () => {
  it('should render successfully', () => {
    const { container } = render(<ListItem />);
    expect(container).toBeTruthy();
  });
});
