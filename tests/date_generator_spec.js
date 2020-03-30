describe('date generator', () => {

  const generate = require('../src/date_generator');
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
        type: 'date'
      }
    };
    
    store.dispatch(action);
    
    generate(store);

    const value = store.getState().value;

    expect(value instanceof Date).toBeTruthy();
    expect(value >= new Date(1900, 1, 1)).toBeTruthy();
    expect(value <= new Date(Date.now())).toBeTruthy();
  });

  it('should generate date in range', () => {

    const action = {
      type: 'metadata',
      payload: {
        type: 'date',
        range: {
          min: new Date(2011, 1, 1),
          max: new Date(2013, 7, 7)
        }
      }
    };

    store.dispatch(action);
    
    generate(store);

    const value = store.getState().value;

    expect(value instanceof Date).toBeTruthy();
    expect(value >= action.payload.range.min).toBeTruthy();
    expect(value <= action.payload.range.max).toBeTruthy();
  });

  it('should generate date from default range if wrong min specified', () => {

    const action = {
      type: 'metadata',
      payload: {
        type: 'date',
        range: {
          min: '2020-01-01',
          max: new Date(2013, 7, 7)
        }
      }
    };

    store.dispatch(action);
    
    generate(store);

    const value = store.getState().value;

    expect(value instanceof Date).toBeTruthy();
    expect(value >= new Date(1900, 1, 1)).toBeTruthy();
    expect(value <= new Date(Date.now())).toBeTruthy();
  });

  it('should generate date from default range if wrong max specified', () => {

    const action = {
      type: 'metadata',
      payload: {
        type: 'date',
        range: {
          min: new Date(2011, 1, 1),
          max: true
        }
      }
    };

    store.dispatch(action);
    
    generate(store);

    const value = store.getState().value;

    expect(value instanceof Date).toBeTruthy();
    expect(value >= new Date(1900, 1, 1)).toBeTruthy();
    expect(value <= new Date(Date.now())).toBeTruthy();
  });
});