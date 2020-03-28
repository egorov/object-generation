describe('factories', () => {

  const factories = require('../src/factories');
  const expected = {
    email: require('../src/make_email'),
    from_set: require('../src/choose_from_set'),
    number: require('../src/make_number'),
    string: require('../src/make_string')
  };

  it('should contain methods', () => {

    for(const name in factories){
      
      expect(expected[name]).toEqual(factories[name]);
    }
  });
});