import React from 'react';
import { render } from '@testing-library/react-native';

import { SelectItem } from './SelectItem';

describe('SelectItem', () => {
  it('should render successfully', () => {
    const { container } = render(<SelectItem label='abc' value='abc' />);
    expect(container).toBeTruthy();
  });
});
