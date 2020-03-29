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
  })
});