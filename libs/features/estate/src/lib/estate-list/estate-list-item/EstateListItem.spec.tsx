import { render } from '@testing-library/react';

import EstateListItem from './EstateListItem';

describe('EstateListItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EstateListItem />);
    expect(baseElement).toBeTruthy();
  });
});
