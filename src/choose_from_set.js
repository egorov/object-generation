const make_number = require('./make_number');

module.exports = function (values) {
  'use strict';

  if(!Array.isArray(values))
    throw new Error('values argument must be an array!');

  if(values.length === 0)
    throw new Error('values array must not be empty!');
  
  const settings = {
    min: 0,
    max: values.length - 1
  };
  const index = make_number(settings);

  return values[index];
};