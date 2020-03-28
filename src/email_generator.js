function email_generator(store) {

  const metadata = get_metadata(store);

  if(metadata.type !== 'email')
    return;

  const make = get_email_factory(store);

  const value = make(metadata);

  store.dispatch({type: 'value', payload: value});
}

function get_metadata(store) {

  const state = store.getState();

  return state.metadata;
}

function get_email_factory(store) {
  
  const state = store.getState();

  return state.factories.email;
}

module.exports = email_generator;