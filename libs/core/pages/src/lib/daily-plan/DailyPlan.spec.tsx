import { render } from '@testing-library/react';

import DailyPlan from './DailyPlan';

describe('DailyPlan', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DailyPlan />);
    expect(baseElement).toBeTruthy();
  });
});
