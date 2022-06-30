import { render } from '@testing-library/react';

import EstatesItem from './EstatesItem';

describe('EstatesItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EstatesItem />);
    expect(baseElement).toBeTruthy();
  });
});
