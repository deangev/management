import { render } from '@testing-library/react';

import AddService from './AddService';

describe('AddService', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AddService />);
    expect(baseElement).toBeTruthy();
  });
});
