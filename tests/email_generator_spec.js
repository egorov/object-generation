describe('email generator', () => {

  const make_store = require('../src/value_factory_store').create;
  const generate = require('../src/email_generator');
  let store = null;

  beforeEach(() => {
    store = make_store();
    store.dispatch({type: 'factories', payload: require('../src/factories')});
  });

  it('should generate random email', () => {

    const action = {
      type: 'metadata',
      payload: {
        type: 'email'
      }
    };
    store.dispatch(action);

    generate(store);

    const value = store.getState().value;

    expect(value.length >= 3).toBeTruthy();
    expect(value.includes('@')).toBeTruthy();
    expect(value.indexOf('@') < value.length - 1).toBeTruthy();
    expect(value.indexOf('@') > 0).toBeTruthy();
  });

  it('should generate email with custom domain', () => {

    const action = {
      type: 'metadata',
      payload: {
        type: 'email',
        domain: 'acme.com'
      }
    };
    store.dispatch(action);

    generate(store);

    const value = store.getState().value;

    expect(value.length >= 3).toBeTruthy();
    expect(value.includes('@')).toBeTruthy();
    expect(value.indexOf('@') < value.length - 1).toBeTruthy();
    expect(value.indexOf('@') > 0).toBeTruthy();
    expect(value.endsWith(action.payload.domain)).toBeTruthy();
  });

  it('should ignore wrong length constraints values', () => {

    const action = {
      type: 'metadata',
      payload: {
        type: 'email',
        domain: {}
      }
    };
    store.dispatch(action);

    generate(store);

    const value = store.getState().value;

    expect(value.length >= 3).toBeTruthy();
    expect(value.includes('@')).toBeTruthy();
    expect(value.indexOf('@') < value.length - 1).toBeTruthy();
    expect(value.indexOf('@') > 0).toBeTruthy();
    expect(value.endsWith('{}')).toBeFalsy();
  });

  it('should ignore unknown constraints', () => {

    const action = {
      type: 'metadata',
      payload: {
        type: 'email',
        min: 25
      }
    };
    store.dispatch(action);

    generate(store);

    const value = store.getState().value;

    expect(value.length >= 3).toBeTruthy();
    expect(value.includes('@')).toBeTruthy();
    expect(value.indexOf('@') < value.length - 1).toBeTruthy();
    expect(value.indexOf('@') > 0).toBeTruthy();
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