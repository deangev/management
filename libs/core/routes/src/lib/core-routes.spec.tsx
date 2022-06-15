import { render } from '@testing-library/react';

import CoreRoutes from './core-routes';

describe('CoreRoutes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CoreRoutes />);
    expect(baseElement).toBeTruthy();
  });
});
