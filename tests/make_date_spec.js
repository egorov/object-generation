describe('make date', () => {

  const make = require('../src/make_date');

  it('should make random date', () => {

    const values = [];

    for(let i = 0; i < 100; i++){

      const value = make();

      expect(values.includes(value)).toBeFalsy();
      expect(value instanceof Date).toBeTruthy();
      expect(value >= new Date(1900, 1, 1)).toBeTruthy();
      expect(value <= new Date(Date.now())).toBeTruthy();

      values.push(value);
    }
  });

  it('should make date in range', () => {

    const values = [];

    const options = {
      min: new Date(2011, 1, 1),
      max: new Date(2013, 7, 7)
    };

    for(let i = 0; i < 100; i++){

      const value = make(options);

      expect(values.includes(value)).toBeFalsy();
      expect(value instanceof Date).toBeTruthy();
      expect(value >= options.min).toBeTruthy();
      expect(value <= options.max).toBeTruthy();

      values.push(value);
    }
  });

  it('should make default date if min wrong in range', () => {

    const values = [];

    const options = {
      min: 'not date at all',
      max: new Date(2013, 7, 7)
    };

    for(let i = 0; i < 100; i++){

      const value = make(options);

      expect(values.includes(value)).toBeFalsy();
      expect(value instanceof Date).toBeTruthy();
      expect(value >= new Date(1900, 1, 1)).toBeTruthy();
      expect(value <= new Date(Date.now())).toBeTruthy();

      values.push(value);
    }
  });

  it('should make default date if max wrong in range', () => {

    const values = [];

    const options = {
      min: new Date(2013, 7, 7),
      max: 'not date at all'
    };

    for(let i = 0; i < 100; i++){

      const value = make(options);

      expect(values.includes(value)).toBeFalsy();
      expect(value instanceof Date).toBeTruthy();
      expect(value >= new Date(1900, 1, 1)).toBeTruthy();
      expect(value <= new Date(Date.now())).toBeTruthy();

      values.push(value);
    }
  });

  it('should make default date if min greater than max', () => {

    const values = [];

    const options = {
      min: new Date(2013, 7, 7),
      max: new Date(2011, 1, 1)
    };

    for(let i = 0; i < 100; i++){

      const value = make(options);

      expect(values.includes(value)).toBeFalsy();
      expect(value instanceof Date).toBeTruthy();
      expect(value >= new Date(1900, 1, 1)).toBeTruthy();
      expect(value <= new Date(Date.now())).toBeTruthy();

      values.push(value);
    }
  });
});