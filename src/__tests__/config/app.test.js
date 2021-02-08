import app from '@config/app';

jest.mock('@config/app');

describe('App loader', () => {
  it('boots cms config', async () => {
    app.boot();
    expect(app.cms).not.toBeNull();
  });
});
