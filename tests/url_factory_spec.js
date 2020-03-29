describe('url factory', () => {

  const make = require('../src/make_url');

  it('should make url', () => {

    const value = make();

    expect(typeof value).toEqual('string');
    expect(value.startsWith('https://')).toBeTruthy();
    expect(value.length >= 10).toBeTruthy();
    expect(value.length <= 108).toBeTruthy();
  });
});