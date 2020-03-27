describe('make number', () => {

  const generate = require('../src/make_number');
  const integers = [
    { min: 3, max: 100 },
    { min: 87, max: 192 },
    { min: -38, max: 238 }
  ];
  const fractions = [
    { min: 5.95, max: 79.15 },
    { min: 37.29, max: 98.53 },
    { min: -11.69, max: 28.59 }
  ];

  it('should generate integers', () => {

    integers.forEach((settings) => {

      const value = generate(settings);
      
      expect(settings.min >= value <= settings.max).toBeTruthy();
      expect(Number.isInteger(value)).toBeTruthy();
    });
  });

  it('should generate fractions', () => {

    fractions.forEach((settings) => {

      const value = generate(settings);
      
      expect(settings.min >= value <= settings.max).toBeTruthy();
      expect(Number.isInteger(value)).toBeFalsy();
      expect(Number(value)).toEqual(value);
      expect(value % 1 !== 0).toBeTruthy();
    });
  });

  it('should throw an error if min greater than max', () => {

    const func = () => {

      const settings = {
        min: 99,
        max: 1
      };

      generate(settings);
    };

    expect(func).toThrow(new Error('settings.max must be greater than min!'));
  });

  it('should throw an error if settings is not object', () => {

    const func = () => {

      generate(88);
    };

    expect(func).toThrow(new TypeError('settings must be an object!'));
  });

  it('should throw an error if settings.min is undefined', () => {

    const func = () => {

      generate({ max: 88});
    };

    expect(func).toThrow(new TypeError('settings.min must be a number!'));
  });

  it('should throw an error if settings.min is not number', () => {

    const func = () => {

      generate({ min: 'x', max: 88});
    };

    expect(func).toThrow(new TypeError('settings.min must be a number!'));
  });

  
  it('should throw an error if settings.max is undefined', () => {
    const func = () => {

      generate({ min: 3 });
    };

    expect(func).toThrow(new TypeError('settings.max must be a number!'));
  });

  it('should throw an error if settings.max is not number', () => {

    const func = () => {

      generate({ min: 3, max: true });
    };

    expect(func).toThrow(new TypeError('settings.max must be a number!'));
  });
});