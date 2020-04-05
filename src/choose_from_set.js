const make_number = require('./make_number');

module.exports = function (metadata) {
  'use strict';

  if(typeof metadata !== 'object')
    throw new Error('metadata object is required!');

  if(metadata === null)
    throw new Error('metadata must be an object!');

  if(typeof metadata.from_set === 'undefined')
    throw new Error('metadata.from_set array is required!');

  if(!Array.isArray(metadata.from_set))
    throw new Error('metadata.from_set must be an array!');

  if(metadata.from_set.length === 0)
    throw new Error('metadata.from_set array must not be empty!');
  
  const settings = {
    min: 0,
    max: metadata.from_set.length - 1
  };
  const index = make_number(settings);

  return metadata.from_set[index];
};