describe('value factory store', () => {

  const make_store = require('../src/value_factory_store').create;
  let store = null;

  beforeEach(() => {

    store = make_store();

    const state = store.getState();

    expect(state.metadata).toBeNull();
  });

  it('should always return new store instance', () => {

    const first = make_store();
    const second = make_store();

    expect(first).not.toBe(second);
  });

  it('should reduce metadata', () => {

    const action = {
      type: 'metadata',
      payload: {
        type: 'string'
      }
    };
    store.dispatch(action);

    expect(store.getState().metadata).toEqual(action.payload);
  });

  it('should reduce value', () => {

    store.dispatch({type: 'value', payload: 55});
    expect(store.getState().value).toEqual(55);

    store.dispatch({type: 'value', payload: null});
    expect(store.getState().value).toBeNull();
  });

  it('should reduce factories', () => {

    const action = {
      type: 'factories',
      payload: require('../src/factories')
    };
    store.dispatch(action);
    expect(store.getState().factories).toEqual(action.payload);
  });
});