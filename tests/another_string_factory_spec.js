describe('another string factory', () => {

  const make = require('../src/another_string_factory');

  it('should return concrete length string', () => {

    const metadata = {
      type: 'string',
      min_length: 5,
      max_length: 5
    };

    const value = make(metadata);

    expect(typeof value).toEqual('string');
    expect(value.length).toEqual(metadata.min_length);
    expect(value.length).toEqual(metadata.max_length);
  });

  it('should return default length string', () => {

    const metadata = {
      type: 'string'
    };

    const value = make(metadata);

    expect(typeof value).toEqual('string');
    expect(value.length >= 3).toBeTruthy();
    expect(value.length <= 9).toBeTruthy();
  });
});