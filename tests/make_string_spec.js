describe('make string', () => {

  const make = require('../src/make_string');
  const strings = [];
  const lengths = [
    5, 
    7, 
    4, 
    11, 
    2
  ];

  it('should return specified length string', () => {

    lengths.forEach((length) => {

      const value = make(length);

      expect(value.length).toEqual(length);
      expect(strings.includes(value)).toBeFalsy();

      strings.push(value);
    });
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