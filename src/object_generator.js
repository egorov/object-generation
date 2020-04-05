const factories = require('./factories');

function object_generator(metadata) {  
 
  let value = null;

  for(const property in metadata) {
    
    const make = factories[metadata[property].type];

    if(typeof make !== 'function')
      continue;

    const property_value = make(metadata[property]);

    if(value === null)
      value = {};

    value[property] = property_value;
  }

  return value;
}

module.exports = object_generator;