const make_number = require('./make_number');
const vowels = [ 
  'a', 
  'e', 
  'o', 
  'i', 
  'u', 
  'y' 
];
const consonants = [ 
  'b', 
  'c', 
  'd', 
  'f', 
  'g', 
  'h', 
  'j', 
  'k', 
  'l', 
  'm', 
  'n', 
  'p', 
  'q', 
  'r', 
  's', 
  't', 
  'v', 
  'x', 
  'z', 
  'w' 
];
const special_characters = [
  '~',
  '`',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '-',
  '_',
  '+',
  '=',
  '[',
  ']',
  '{',
  '}',
  '|',
  '\\',
  '/',
  '<',
  '>',
  ',',
  '.',
  '?',
  ' '
];

const characters = [
  vowels,
  consonants,
  special_characters
];

function getRandomCharacter() {
  'use strict';

  const source_index = make_number({min: 0, max: characters.length - 1});

  const source = characters[source_index];

  const index = make_number({min: 0, max: source.length - 1});
  
  const upper = make_number({min: 0, max: 1}) === 1 ? true : false;

  if(upper)
    return source[index].toUpperCase();

  return source[index];
}

module.exports = function(length) {
  'use strict';

  validate(length);

  let result = '';

  for(let index = 0; index < length; index += 1) {    
    result += getRandomCharacter();      
  } 
  
  return result;
};

function validate(length) {
  'use strict';

  if(length <= 0)
    throw new Error('length must be positive integer!');

  if(length > 100)
    throw new Error('length must not exceed 100 characters!');
}