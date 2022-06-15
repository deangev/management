import { render } from '@testing-library/react';

import DrawerItem from './DrawerItem';

describe('DrawerItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DrawerItem />);
    expect(baseElement).toBeTruthy();
  });
});
