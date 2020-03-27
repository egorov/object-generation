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

module.exports = function(length) {
  'use strict';

  validate(length);

  let result = '';

  for(let index = 0; index < length; index += 1) {
    
    if(index % 2 === 0)
      result += getConsonant();
    else
      result += getVowel();
      
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

function getConsonant() {
  'use strict';

  const settings = {
    min: 0,
    max: consonants.length - 1
  };
  const index = make_number(settings);

  return consonants[index];
}

function getVowel() {
  'use strict';

  const settings = {
    min: 0,
    max: vowels.length - 1
  };
  const index = make_number(settings);

  return vowels[index];
}