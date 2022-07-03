import { render } from '@testing-library/react';

import EstatesListItem from './EstatesListItem';

describe('EstatesListItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EstatesListItem />);
    expect(baseElement).toBeTruthy();
  });
});
