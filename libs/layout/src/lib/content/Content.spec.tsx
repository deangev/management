import { render } from '@testing-library/react';

import Content from './Content';

describe('Content', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Content />);
    expect(baseElement).toBeTruthy();
  });
});
