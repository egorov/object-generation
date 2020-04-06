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

const DEFAULT_MIN_LENGTH = 8;
const DEFAULT_MAX_LENGTH = 16;

module.exports = function(metadata) {
  'use strict';

  const length = get_length(metadata);

  let result = '';

  for(let index = 0; index < length; index += 1) {    
    result += getRandomCharacter();      
  } 
  
  return result;
};

function get_length(metadata) {
   
  const settings = get_settings(metadata);

  const length = make_number(settings);

  return length;
}

function get_settings(metadata) {
  
  const min = get_min_length(metadata);

  const m = get_max_length(metadata);
  
  const max = m >= min ? m : min * 2;

  return {
    min,
    max
  };
}

function get_min_length(metadata) {

  if(typeof metadata !== 'object')
    return DEFAULT_MIN_LENGTH;

  if(typeof metadata.min_length !== 'number')
    return DEFAULT_MIN_LENGTH;
  
  return metadata.min_length;
}

function get_max_length(metadata) {

  if(typeof metadata !== 'object')
    return DEFAULT_MAX_LENGTH;

  if(typeof metadata.max_length !== 'number')
    return DEFAULT_MAX_LENGTH;
  
  return metadata.max_length;
}