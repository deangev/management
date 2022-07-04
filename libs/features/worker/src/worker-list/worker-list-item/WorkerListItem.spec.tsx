import React from 'react';
import { render } from '@testing-library/react-native';

import WorkerListItem from './WorkerListItem';

describe('WorkerListItem', () => {
  it('should render successfully', () => {
    const { container } = render(<WorkerListItem />);
    expect(container).toBeTruthy();
  });
});
