function generate_number(store) {

  const metadata = get_metadata(store);

  if(metadata.type !== 'number')
    return;

  const make_number = get_number_factory(store);

  const settings = get_settings(metadata);

  const value = make_number(settings);

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

function get_settings(metadata) {
  
  const min = get_min(metadata);
  const m = get_max(metadata);
  const max = m > min ? m : min * 2;

  return {
    min,
    max
  };
}

function get_min(metadata) {

  if(typeof metadata.min === 'number')
    return metadata.min;
  
  return 0;
}

function get_max(metadata) {

  if(typeof metadata.max === 'number')
    return metadata.max;

  return 10;
}

module.exports = generate_number;