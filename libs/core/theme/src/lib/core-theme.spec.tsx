import { render } from '@testing-library/react';

import CoreTheme from './core-theme';

describe('CoreTheme', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CoreTheme />);
    expect(baseElement).toBeTruthy();
  });
});
