describe('generators', () => {

  const generators = require('../src/generators');
  const expected = {
    make_number: require('../src/make_number'),
    make_string: require('../src/make_string'),
    choose_from_set: require('../src/choose_from_set')    
  };

  it('should contain value generators', () => {

    for(const name in generators){
      
      expect(expected[name]).toEqual(generators[name]);
    }
  });
});