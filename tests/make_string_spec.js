describe('another string factory', () => {

  const make = require('../src/make_string');

  it('should return default length string without metadata', () => {

    const value = make();

    expect(typeof value).toEqual('string');
    expect(value.length >= 3).toBeTruthy();
    expect(value.length <= 9).toBeTruthy();
  });

  it('should return default length string', () => {

    const metadata = {};

    const value = make(metadata);

    expect(typeof value).toEqual('string');
    expect(value.length >= 3).toBeTruthy();
    expect(value.length <= 9).toBeTruthy();
  });

  it('should return concrete length string', () => {

    const metadata = {
      min_length: 5,
      max_length: 5
    };

    const value = make(metadata);

    expect(typeof value).toEqual('string');
    expect(value.length).toEqual(metadata.min_length);
    expect(value.length).toEqual(metadata.max_length);
  });

  it('should return min length string', () => {

    const metadata = {
      min_length: 5
    };

    const value = make(metadata);

    expect(typeof value).toEqual('string');
    expect(value.length >= metadata.min_length).toBeTruthy();
    expect(value.length <= 9).toBeTruthy();
  });

  it('should return min-max length string', () => {

    const metadata = {
      min_length: 5,
      max_length: 11
    };

    const value = make(metadata);

    expect(typeof value).toEqual('string');
    expect(value.length >= metadata.min_length).toBeTruthy();
    expect(value.length <= metadata.max_length).toBeTruthy();
  });

  it('should return max length string', () => {

    const metadata = {
      max_length: 11
    };

    for(let i = 0; i < 100; i++) {

      const value = make(metadata);

      expect(typeof value).toEqual('string');
      expect(value.length >= 3).toBeTruthy();
      expect(value.length <= metadata.max_length).toBeTruthy();  
    }
  });
});