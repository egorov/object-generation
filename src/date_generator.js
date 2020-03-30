function date_generator(store) {

  const metadata = get_metadata(store);

  if(metadata.type !== 'date')
    return;

  const make_date = get_date_factory(store);

  const value = make_date(metadata.range);

  store.dispatch({ type:'value', payload: value });
}

function get_metadata(store) {

  const state = store.getState();

  return state.metadata;
}

function get_date_factory(store) {
  
  const state = store.getState();

  return state.factories.date;
}


module.exports = date_generator;