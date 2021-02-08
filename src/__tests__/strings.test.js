import isAValidExternalUrl from '@utils/strings';

describe('Util strings', () => {
  it('should validate if is not a valid external url', () => {
    expect(isAValidExternalUrl('/')).toBeFalsy();
  });
  it('should validate if is a valid external url', () => {
    expect(isAValidExternalUrl('https://www.google.com/')).toBeTruthy();
  });
});
