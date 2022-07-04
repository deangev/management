import React from 'react';
import { render } from '@testing-library/react-native';

import WorkerWizard from './WorkerWizard';

describe('WorkerWizard', () => {
  it('should render successfully', () => {
    const { container } = render(<WorkerWizard />);
    expect(container).toBeTruthy();
  });
});
