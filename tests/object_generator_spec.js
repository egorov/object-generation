describe('object generator', () => {

  const store = require('../src/object_factory_store').create();
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
    const action = {
      type: 'metadata',
      payload: metadata
    };
    
    store.dispatch(action);
    
    generate(store);
    
    const value = store.getState().value;
    
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
});