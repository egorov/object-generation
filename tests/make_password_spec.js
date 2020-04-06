describe('make password', () => {

  const make = require('../src/make_password');
  const values = [];

  it('should return default length password', () => {

    for(let i = 0; i < 100; i++) {
      
      const value = make();

      expect(value.length >= 8).toBeTruthy();
      expect(value.length <= 16).toBeTruthy();
      expect(values.includes(value)).toBeFalsy();

      values.push(value);
    }
  });

  it('should return concrete length password', () => {

    const metadata = {
      min_length: 8,
      max_length: 8
    };

    for(let i = 0; i < 100; i++) {
      
      const value = make(metadata);

      expect(value.length).toEqual(metadata.min_length);
      expect(value.length).toEqual(metadata.max_length);
      expect(values.includes(value)).toBeFalsy();

      values.push(value);
    }
  });

  it('should return password with minimal length', () => {

    const metadata = {
      min_length: 8
    };

    for(let i = 0; i < 100; i++) {
      
      const value = make(metadata);

      expect(value.length >= metadata.min_length).toBeTruthy();
      expect(value.length <= 16).toBeTruthy();
      expect(values.includes(value)).toBeFalsy();

      values.push(value);
    }
  });

  it('should return password with maximal length', () => {

    const metadata = {
      max_length: 11
    };

    for(let i = 0; i < 100; i++) {
      
      const value = make(metadata);

      expect(value.length >= 8).toBeTruthy();
      expect(value.length <= metadata.max_length).toBeTruthy();
      expect(values.includes(value)).toBeFalsy();

      values.push(value);
    }
  });

  it('should correct max length if smaller than min', () => {

    const metadata = {
      min_length: 13,
      max_length: 11
    };

    for(let i = 0; i < 100; i++) {
      
      const value = make(metadata);

      expect(value.length >= metadata.min_length).toBeTruthy();
      expect(value.length <= metadata.min_length * 2).toBeTruthy();
      expect(values.includes(value)).toBeFalsy();

      values.push(value);
    }
  });
});