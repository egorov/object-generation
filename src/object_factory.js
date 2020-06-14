const factories = require('./factories');

function object_factory(metadata) {  
 
  let value = null;

  for(const property in metadata) {
   
    const make = getFactoryOf(metadata, property);

    if(typeof make !== 'function')
      continue;

    const property_value = make(metadata[property]);

    if(value === null)
      value = {};

    value[property] = property_value;
  }

  return value;
}

function getFactoryOf(metadata, property) {

  if(typeof metadata[property].from_set !== 'undefined')
    return factories.from_set;

  return factories[metadata[property].type];  
}

module.exports = object_factory;