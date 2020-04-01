const MIN = 0;
const MAX = 1000;

function make_number(metadata) {
  'use strict';
  
  const min = get_min(metadata);

  const m = get_max(metadata);
  
  const max = m >= min ? m : min * 2;

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function get_min(metadata) {

  if(typeof metadata !== 'object')
    return MIN;

  if(typeof metadata.min !== 'number')
    return MIN;
  
  return metadata.min;
}

function get_max(metadata) {

  if(typeof metadata !== 'object')
    return MAX;
  
  if(typeof metadata.max !== 'number')
    return MAX;

  return metadata.max;
}

module.exports = make_number;