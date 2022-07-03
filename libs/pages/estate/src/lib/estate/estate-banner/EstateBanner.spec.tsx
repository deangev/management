import React from 'react';
import { render } from '@testing-library/react-native';

import EstateBanner from './EstateBanner';

describe('EstateBanner', () => {
  it('should render successfully', () => {
    const { container } = render(<EstateBanner />);
    expect(container).toBeTruthy();
  });
});
