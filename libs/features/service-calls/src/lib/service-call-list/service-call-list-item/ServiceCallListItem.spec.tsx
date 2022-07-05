import React from 'react';
import { render } from '@testing-library/react-native';

import ServiceCallListItem from './ServiceCallListItem';

describe('ServiceCallListItem', () => {
  it('should render successfully', () => {
    const { container } = render(<ServiceCallListItem />);
    expect(container).toBeTruthy();
  });
});
