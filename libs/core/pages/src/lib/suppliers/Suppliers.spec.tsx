import { render } from '@testing-library/react';

import Suppliers from './Suppliers';

describe('Suppliers', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Suppliers />);
    expect(baseElement).toBeTruthy();
  });
});
