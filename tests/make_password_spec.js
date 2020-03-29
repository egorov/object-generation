describe('make password', () => {

  const make_number = require('../src/make_number');
  const make = require('../src/make_password');
  const values = [];

  it('should return specified length password', () => {

    const length = make_number({ min: 11, max: 18 });

    for(let i = 0; i < 100; i++) {
      const value = make(length);

      expect(value.length).toEqual(length);
      expect(values.includes(value)).toBeFalsy();

      values.push(value);
    }
  });

  it('should throw if length is negative', () => {

    const method = () => {
      make(-6);
    };

    expect(method).toThrow(new Error('length must be positive integer!'));
  });

  it('should throw if length is zero', () => {

    const method = () => {
      make(0);
    };

    expect(method).toThrow(new Error('length must be positive integer!'));
  });

  it('should throw if length greater than 100', () => {

    const method = () => {
      make(101);
    };

    expect(method).toThrow(new Error('length must not exceed 100 characters!'));
  });
});