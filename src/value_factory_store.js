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

function value(state = null, action) {
  switch(action.type) {
    case 'value': 
      return action.payload;
    default:
      return state;
  }
}

function factories(state = null, action) {
  switch(action.type) {
    case 'factories': 
      return Object.assign({}, action.payload);
    default:
      return state;
  }
}

const reducers = {
  factories,
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