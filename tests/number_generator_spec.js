describe('number generator', () => {

  const generate = require('../src/number_generator');
  const make_store = require('../src/value_factory_store').create;
  let store = null;

  beforeEach(() => {
    store = make_store();
    store.dispatch({type: 'factories', payload: require('../src/factories')});
  });

  it('should generate value', () => {

    const action = {
      type: 'metadata',
      payload: {
        type: 'number'
      }
    };
    
    store.dispatch(action);
    
    generate(store);

    const value = store.getState().value;

    expect(typeof value).toEqual('number');
    expect(value >= 0).toBeTruthy();
    expect(value <= 10).toBeTruthy();
  });

  it('should generate min value', () => {

    const action = {
      type: 'metadata',
      payload: {
        type: 'number',
        min: 10
      }
    };
    
    store.dispatch(action);
    
    generate(store);

    const value = store.getState().value;

    expect(typeof value).toEqual('number');
    expect(value >= action.payload.min).toBeTruthy();
    expect(value <= action.payload.min * 2).toBeTruthy();
  });

  it('should generate max value', () => {

    const action = {
      type: 'metadata',
      payload: {
        type: 'number',
        min: 10,
        max: 25
      }
    };
    
    store.dispatch(action);
    
    generate(store);

    const value = store.getState().value;

    expect(typeof value).toEqual('number');
    expect(value >= action.payload.min).toBeTruthy();
    expect(value <= action.payload.max).toBeTruthy();
  });

  it('should ignore wrong constraints values', () => {

    const action = {
      type: 'metadata',
      payload: {
        type: 'number',
        min: 'ten',
        max: true
      }
    };
    store.dispatch(action);

    generate(store);

    const value = store.getState().value;

    expect(typeof value).toEqual('number');
    expect(value >= 0).toBeTruthy();
    expect(value <= 10).toBeTruthy();
  });

  it('should ignore unknown constraints', () => {

    const action = {
      type: 'metadata',
      payload: {
        type: 'number',
        min_length: 25,
        max_length: 35
      }
    };
    store.dispatch(action);

    generate(store);

    const value = store.getState().value;

    expect(typeof value).toEqual('number');
    expect(value >= 0).toBeTruthy();
    expect(value <= 10).toBeTruthy();
  });

  it('should ignore unknown value type', () => {

    const action = {
      type: 'metadata',
      payload: {
        type: 'string'
      }
    };
    store.dispatch(action);

    generate(store);

    expect(store.getState().value).toBeNull();
  });  
});