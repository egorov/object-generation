describe('string generator', () => {

  const make_store = require('../src/value_factory_store').create;
  const generate = require('../src/string_generator');
  let store = null;

  beforeEach(() => {
    store = make_store();
    store.dispatch({type: 'factories', payload: require('../src/factories')});
  });

  it('should generate string', () => {

    const action = {
      type: 'metadata',
      payload: {
        type: 'string'
      }
    };
    store.dispatch(action);

    generate(store);

    const value = store.getState().value;

    expect(typeof value).toEqual('string');
    expect(value.length >= 3).toBeTruthy();
    expect(value.length <= 9).toBeTruthy();
  });

  it('should generate string with min length', () => {

    const action = {
      type: 'metadata',
      payload: {
        type: 'string',
        min_length: 5
      }
    };
    store.dispatch(action);

    generate(store);

    const value = store.getState().value;

    expect(typeof value).toEqual('string');
    expect(value.length >= action.payload.min_length).toBeTruthy();
    expect(value.length <= 9).toBeTruthy();
  });

  it('should generate string with min and max length', () => {

    const action = {
      type: 'metadata',
      payload: {
        type: 'string',
        min_length: 3,
        max_length: 7
      }
    };
    store.dispatch(action);

    generate(store);

    const value = store.getState().value;

    expect(typeof value).toEqual('string');
    expect(value.length >= action.payload.min_length).toBeTruthy();
    expect(value.length <= action.payload.max_length).toBeTruthy();
  });

  it('should generate string with max length', () => {

    const action = {
      type: 'metadata',
      payload: {
        type: 'string',
        max_length: 7
      }
    };
    store.dispatch(action);

    generate(store);

    const value = store.getState().value;

    expect(typeof value).toEqual('string');
    expect(value.length >= 3).toBeTruthy();
    expect(value.length <= action.payload.max_length).toBeTruthy();
  });

  it('should ignore wrong length constraints values', () => {

    const action = {
      type: 'metadata',
      payload: {
        type: 'string',
        min_length: 'ten',
        max_length: true
      }
    };
    store.dispatch(action);

    generate(store);

    const value = store.getState().value;

    expect(typeof value).toEqual('string');
    expect(value.length >= 3).toBeTruthy();
    expect(value.length <= 9).toBeTruthy();
  });

  it('should ignore unknown constraints', () => {

    const action = {
      type: 'metadata',
      payload: {
        type: 'string',
        min: 25,
        max: 35
      }
    };
    store.dispatch(action);

    generate(store);

    const value = store.getState().value;

    expect(typeof value).toEqual('string');
    expect(value.length >= 3).toBeTruthy();
    expect(value.length <= 9).toBeTruthy();
  });

  it('should ignore unknown value type', () => {

    const action = {
      type: 'metadata',
      payload: {
        type: 'number'
      }
    };
    store.dispatch(action);

    generate(store);

    expect(store.getState().value).toBeNull();
  });
});