describe('factories', () => {

  const factories = require('../src/factories');
  const expected = {
    date: require('../src/make_date'),
    email: require('../src/make_email'),
    'from set of': require('../src/choose_from_set'),
    number: require('../src/make_number'),
    password: require('../src/make_password'),
    phone: require('../src/make_phone'),
    string: require('../src/make_string'),
    url: require('../src/make_url')
  };

  it('should contain methods', () => {

    for(const name in factories){
      
      expect(expected[name]).toEqual(factories[name]);
    }
  });
});