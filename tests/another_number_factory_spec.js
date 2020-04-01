describe('make number', () => {

  const make = require('../src/another_number_factory');
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

      const value = make(settings);
      
      expect(settings.min >= value <= settings.max).toBeTruthy();
      expect(Number.isInteger(value)).toBeTruthy();
    });
  });

  it('should generate fractions', () => {

    fractions.forEach((settings) => {

      const value = make(settings);
      
      expect(settings.min >= value <= settings.max).toBeTruthy();
      expect(Number.isInteger(value)).toBeFalsy();
      expect(Number(value)).toEqual(value);
      expect(value % 1 !== 0).toBeTruthy();
    });
  });

  it('should make min only value', () => {

    const metadata = {
      min: 5
    };

    const value = make(metadata);

    expect(typeof value).toEqual('number');
    expect(value >= metadata.min).toBeTruthy();
    expect(value <= 1000).toBeTruthy();
  });

  it('should make max only value', () => {

    const metadata = {
      max: 15
    };

    const value = make(metadata);

    expect(typeof value).toEqual('number');
    expect(value >= 0).toBeTruthy();
    expect(value <= metadata.max).toBeTruthy();
  });

  it('should make value in default range', () => {

    const value = make();

    expect(typeof value).toEqual('number');
    expect(value >= 0).toBeTruthy();
    expect(value <= 1000).toBeTruthy();
  });
});