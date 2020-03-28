describe('object generator', () => {

  const generate = require('../src/object_generator');

  it('should generate an object', () => {

    const metadata = {
      first_name: {
        type: 'string',
        min_length: 2,
        max_length: 9
      },
      last_name: {
        type: 'string',
        min_length: 2,
        max_length: 9
      },
      age: {
        type: 'number',
        min: 18,
        max: 99
      }
    };
    
    const value = generate(metadata);
      
    expect(typeof value.first_name).toEqual('string');
    expect(value.first_name.length >= metadata.first_name.min_length).toBeTruthy();
    expect(value.first_name.length <= metadata.first_name.max_length).toBeTruthy();
    
    
    expect(typeof value.last_name).toEqual('string');
    expect(value.last_name.length >= metadata.last_name.min_length).toBeTruthy();
    expect(value.last_name.length <= metadata.last_name.max_length).toBeTruthy();
    
    expect(typeof value.age).toEqual('number');
    expect(value.age >= metadata.age.min).toBeTruthy();
    expect(value.age <= metadata.age.max).toBeTruthy();    
  });

  it('should return empty object for unknown metadata', () => {

    const metadata = {
      engbood: {
        type: 'dilgboldl'
      }
    };

    expect(generate(metadata)).toBeNull();
  });
});