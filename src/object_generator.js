const generators = require('./generators');

function object_generator(metadata) {  

  const value_store = make_value_store();
  
  let value = null;

  for(const property in metadata) {
    
    const action = {
      type: 'metadata',
      payload: metadata[property]
    };
    
    value_store.dispatch(action);
    
    const generate = generators[metadata[property].type];

    if(typeof generate !== 'function')
      continue;

    generate(value_store);

    if(value === null)
      value = {};

    value[property] = value_store.getState().value;
  }

  return value;
}

function make_value_store() {
  
  const store = require('./value_factory_store').create();

  const type = 'factories';
  const payload = require('./factories');
  
  store.dispatch({type, payload});

  return store;
}

module.exports = object_generator;