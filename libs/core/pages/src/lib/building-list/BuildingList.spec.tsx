import { render } from '@testing-library/react';

import BuildingList from './BuildingList';

describe('BuildingList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BuildingList />);
    expect(baseElement).toBeTruthy();
  });
});
