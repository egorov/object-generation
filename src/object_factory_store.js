const combineReducers = require('redux').combineReducers;
const createStore = require('redux').createStore;

function metadata(state = null, action) {
  switch(action.type) {
    case 'metadata': 
      return Object.assign({}, action.payload);
    default:
      return state;
  }
}

function value(state = {}, action) {
  switch(action.type) {
    case 'value': 
      return Object.assign({}, state, action.payload);
    case 'metadata':
      return {};
    default:
      return state;
  }
}

function generators(state = null, action) {
  switch(action.type) {
    case 'generators': 
      return Object.assign({}, action.payload);
    default:
      return state;
  }
}

const reducers = {
  generators,
  metadata,
  value
};

module.exports = {
  create() {    

    const reducer = combineReducers(reducers);
    
    const store = createStore(reducer);

    return store;
  }
};