import React from 'react';
import { render } from '@testing-library/react-native';

import EstateList from './EstateList';

describe('EstateList', () => {
  it('should render successfully', () => {
    const { container } = render(<EstateList />);
    expect(container).toBeTruthy();
  });
});
