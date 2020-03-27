function string_generator(store) {

  const metadata = get_metadata(store);

  if(metadata.type !== 'string')
    return;

  const number_factory = get_number_factory(store);

  const length = get_length(metadata, number_factory);

  const make = get_string_factory(store);

  const value = make(length);

  store.dispatch({type: 'value', payload: value});
}

function get_metadata(store) {

  const state = store.getState();

  return state.metadata;
}

function get_number_factory(store) {
  
  const state = store.getState();

  return state.factories.number;
}

function get_length(metadata, make_number) {
   
  const settings = {
    min: get_min_length(metadata),
    max: get_max_length(metadata)
  };

  const length = make_number(settings);

  return length;
}

function get_min_length(metadata) {

  if(typeof metadata.min_length === 'number')
    return metadata.min_length;
  
  return 3;
}

function get_max_length(metadata) {

  if(typeof metadata.max_length === 'number')
    return metadata.max_length;

  return 9;
}

function get_string_factory(store) {
  
  const state = store.getState();

  return state.factories.string;
}

module.exports = string_generator;