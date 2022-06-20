import { coreMiddleware } from './core-middleware';

describe('coreMiddleware', () => {
  it('should work', () => {
    expect(coreMiddleware()).toEqual('core-middleware');
  });
});
