import { render } from '@testing-library/react';

import PagesHome from './pages-home';

describe('PagesHome', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PagesHome />);
    expect(baseElement).toBeTruthy();
  });
});
