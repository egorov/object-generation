const generators = require('./generators');

function object_generator(store) {  
  
  const metadata = get_metadata(store);

  const value_store = make_value_store();

  for(const property in metadata) {
    
    const action = {
      type: 'metadata',
      payload: metadata[property]
    };
    
    value_store.dispatch(action);
    
    const generate = generators[metadata[property].type];

    generate(value_store);

    const value_action = make_value_action(property, value_store);

    store.dispatch(value_action);
  }
}

function get_metadata(store) {

  const state = store.getState();

  return state.metadata;
}

function make_value_store() {
  
  const store = require('./value_factory_store').create();

  const type = 'factories';
  const payload = require('./factories');
  
  store.dispatch({type, payload});

  return store;
}

function make_value_action(property, value_store) {

  const action = {
    type: 'value',
    payload: {}
  };

  action.payload[property] = value_store.getState().value;

  return action;
}

module.exports = object_generator;