import React from 'react';
import { render } from '@testing-library/react-native';

import {Select} from './Select';
import { SelectItem } from '@management/core/ui-components';

describe('Select', () => {
  it('should render successfully', () => {
    const { container } = render(<Select placeholder='בחר' children={<SelectItem label='abc' value='abc' />} onValueChange={() => {}} />);
    expect(container).toBeTruthy();
  });
});
