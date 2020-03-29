describe('make phone', () => {

  const make = require('../src/make_phone');
  const values = [];

  it('should make random phone number strings', () => {

    for(let i = 0; i < 100; i++) {

      const value = make();

      expect(values.includes(value)).toBeFalsy();
      
      const regex = /^\+[\d]{1,3}\s[\d]{3}\s[\d]{3}\s[\d]{4}/;
      
      expect(regex.test(value)).toBeTruthy();

      values.push(value);
    }
  });

  it('should make random phone number with lowercase country code', () => {

    for(let i = 0; i < 100; i++) {

      const value = make('ru');

      expect(values.includes(value)).toBeFalsy();
      
      const regex = /^\+7\s[\d]{3}\s[\d]{3}\s[\d]{4}/;
      
      expect(regex.test(value)).toBeTruthy();

      values.push(value);
    }
  });

  it('should make random phone number with uppercase country code', () => {

    for(let i = 0; i < 100; i++) {

      const value = make('US');

      expect(values.includes(value)).toBeFalsy();
      
      const regex = /^\+1\s[\d]{3}\s[\d]{3}\s[\d]{4}/;
      
      expect(regex.test(value)).toBeTruthy();

      values.push(value);
    }
  });

  it('should throw on wrong country code', () => {

    const method = () => {
      make('xx');
    };

    expect(method).toThrow(new Error('No code found for country xx!'))
  });
});