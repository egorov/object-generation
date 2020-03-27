describe('factories', () => {

  const factories = require('../src/factories');
  const expected = {
    number: require('../src/make_number'),
    string: require('../src/make_string'),
    from_set: require('../src/choose_from_set')    
  };

  it('should contain methods', () => {

    for(const name in factories){
      
      expect(expected[name]).toEqual(factories[name]);
    }
  });
});