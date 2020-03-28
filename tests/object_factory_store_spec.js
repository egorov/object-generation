describe('object factory store', () => {

  const make_store = require('../src/object_factory_store').create;
  let store = null;

  beforeEach(() => {

    store = make_store();

    const state = store.getState();

    expect(state.metadata).toBeNull();
  });

  it('should always return new store', () => {

    const first = make_store();
    const second = make_store();

    expect(first).not.toBe(second);
  });

  it('should reduce metadata', () => {

    const action = {
      type: 'metadata',
      payload: {
        first_name: {
          type: 'string'
        }
      }
    };
    store.dispatch(action);

    expect(store.getState().metadata).toEqual(action.payload);
    expect(store.getState().value).toEqual({});
  });

  it('should reduce generators', () => {

    const action = {
      type: 'generators',
      payload: require('../src/factories')
    };
    store.dispatch(action);
    expect(store.getState().generators).toEqual(action.payload);
  });

  it('should reduce value', () => {

    const action = {
      type: 'value',
      payload: {
        first_name: 'ifj'
      }
    };
    store.dispatch(action);

    expect(store.getState().value).toEqual(action.payload);

    action.payload = {
      last_name: 'qon'
    };
    store.dispatch(action);
    
    const value = store.getState().value;

    expect(value).toEqual({first_name:'ifj', last_name: 'qon'});
  });

  it('should reset value on metadata', () => {

    const action = {
      type: 'value',
      payload: {
        first_name: 'ifjna'
      }
    };
    store.dispatch(action);

    expect(store.getState().value).toEqual(action.payload);

    store.dispatch({type: 'metadata', payload: {}});

    expect(store.getState().value).toEqual({});
  });
});