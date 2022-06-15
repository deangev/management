import { render } from '@testing-library/react';

import ServiceCalls from './ServiceCalls';

describe('ServiceCalls', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ServiceCalls />);
    expect(baseElement).toBeTruthy();
  });
});
