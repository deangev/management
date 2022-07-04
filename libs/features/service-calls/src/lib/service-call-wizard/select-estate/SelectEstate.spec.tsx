import React, { useState } from 'react';
import { render } from '@testing-library/react-native';

import { SelectEstate } from './SelectEstate';

describe('SelectEstate', () => {
  it('should render successfully', () => {
    const [estateID, setEstateID] = useState('')
    const { container } = render(<SelectEstate setEstateID={setEstateID} />);
    expect(container).toBeTruthy();
  });
});
