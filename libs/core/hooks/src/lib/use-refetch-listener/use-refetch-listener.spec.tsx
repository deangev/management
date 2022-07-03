import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useRefetchListener from './use-refetch-listener';

describe('useRefetchListener', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useRefetchListener());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
