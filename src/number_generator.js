function generate_number(store) {

  const metadata = get_metadata(store);

  if(metadata.type !== 'number')
    return;

  const make_number = get_number_factory(store);

  const value = make_number(metadata);

  store.dispatch({ type:'value', payload: value });
}

function get_metadata(store) {

  const state = store.getState();

  return state.metadata;
}

function get_number_factory(store) {
  
  const state = store.getState();

  return state.factories.number;
}

module.exports = generate_number;