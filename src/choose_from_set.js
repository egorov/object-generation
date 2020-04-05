const make_number = require('./make_number');

module.exports = function (metadata) {
  'use strict';

  if(typeof metadata !== 'object')
    throw new Error('metadata object is required!');

  if(metadata === null)
    throw new Error('metadata must be an object!');

  if(typeof metadata.values === 'undefined')
    throw new Error('metadata.values array is required!');

  if(!Array.isArray(metadata.values))
    throw new Error('metadata.values must be an array!');

  if(metadata.values.length === 0)
    throw new Error('metadata.values array must not be empty!');
  
  const settings = {
    min: 0,
    max: metadata.values.length - 1
  };
  const index = make_number(settings);

  return metadata.values[index];
};