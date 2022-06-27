import React from 'react';
import { render } from '@testing-library/react-native';

import CreateEstate from './create-estate';

describe('CreateEstate', () => {
  it('should render successfully', () => {
    const { container } = render(<CreateEstate />);
    expect(container).toBeTruthy();
  });
});
