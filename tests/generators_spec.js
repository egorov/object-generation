describe('generators', () => {

  const generators = require('../src/generators');
  const expected = {
    number: require('../src/number_generator'),
    string: require('../src/string_generator')
  };

  it('should contain methods', () => {

    for(const name in generators){
      
      expect(expected[name]).toEqual(generators[name]);
    }
  });
});