function string_generator(store) {

  const metadata = get_metadata(store);

  if(metadata.type !== 'string')
    return;

  const make = get_string_factory(store);

  const value = make(metadata);

  store.dispatch({type: 'value', payload: value});
}

function get_metadata(store) {

  const state = store.getState();

  return state.metadata;
}

function get_string_factory(store) {
  
  const state = store.getState();

  return state.factories.string;
}

module.exports = string_generator;