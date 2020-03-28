describe('make email', () => {

  const make = require('../src/make_email');

  it('should return valid email', () => {

    const value = make({});

    expect(value.length >= 3).toBeTruthy();
    expect(value.includes('@')).toBeTruthy();
    expect(value.indexOf('@') < value.length - 1).toBeTruthy();
    expect(value.indexOf('@') > 0).toBeTruthy();
  });

  it('should make email with domain', () => {

    const metadata = {
      domain: 'acme.local'
    };
    const value = make(metadata);

    expect(value.length >= metadata.domain.length + 2).toBeTruthy();
    expect(value.includes('@')).toBeTruthy();
    expect(value.indexOf('@') < value.length - 1).toBeTruthy();
    expect(value.indexOf('@') > 0).toBeTruthy();
    expect(value.endsWith(metadata.domain)).toBeTruthy();
  });
});