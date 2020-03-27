function make_number(settings) {
  'use strict';

  validate(settings);
  
  const min = settings.min;
  const max = settings.max;

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function validate(settings) {
  'use strict';

  if(typeof settings !== 'object')
    throw new TypeError('settings must be an object!');

  if(typeof settings.min !== 'number')
    throw new TypeError('settings.min must be a number!');

  if(typeof settings.max !== 'number')
    throw new TypeError('settings.max must be a number!');

  if(settings.min > settings.max)
    throw new Error('settings.max must be greater than min!');
}

module.exports = make_number;