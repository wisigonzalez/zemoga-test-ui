import spacing from '@assets/styles/core/utils';

describe('Utils', () => {
  it('should validate spacing without values', () => {
    expect(spacing()).toEqual('0');
  });
  it('should validate spacing with 1 value', () => {
    expect(spacing(1)).toEqual('0.25rem');
  });
  it('should validate spacing with 2 values', () => {
    expect(spacing(1, 1)).toEqual('0.25rem 0.25rem');
  });
});
