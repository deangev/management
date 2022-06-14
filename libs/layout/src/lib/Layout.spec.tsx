import { render } from '@testing-library/react';

import Layout from './Layout';

describe('Layout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Layout>asdasd</Layout>);
    expect(baseElement).toBeTruthy();
  });
});
