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
const DEFAULT_MIN_LENGTH = 3;
const DEFAULT_MAX_LENGTH = 9;

module.exports = function(metadata) {
  'use strict';

  const length = get_length(metadata);

  let result = '';

  for(let index = 0; index < length; index += 1) {
    
    if(index % 2 === 0)
      result += get_consonant();
    else
      result += get_vowel();
      
  } 
  
  return result;
};

function get_consonant() {
  'use strict';

  const settings = {
    min: 0,
    max: consonants.length - 1
  };
  const index = make_number(settings);

  return consonants[index];
}

function get_vowel() {
  'use strict';

  const settings = {
    min: 0,
    max: vowels.length - 1
  };
  const index = make_number(settings);

  return vowels[index];
}

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

  if(typeof metadata.min_length !== 'number')
    return DEFAULT_MAX_LENGTH;
  
  return metadata.min_length;
}