import { render } from '@testing-library/react';

import ApartmentsManagement from './ApartmentsManagement';

describe('ApartmentsManagement', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ApartmentsManagement />);
    expect(baseElement).toBeTruthy();
  });
});
