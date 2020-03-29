const make_number = require('./make_number');
const country_codes_object = require('./country_codes_object');
const country_codes_array = require('./country_codes_array');

function make_phone(country) {

  const parts = [];

  parts.push(get_random_country_code());
  parts.push(make_random_digit_string(3));
  parts.push(make_random_digit_string(3));
  parts.push(make_random_digit_string(4));

  const value = parts.join(' ');

  return value;
}

function get_random_country_code() {

  const settings = {
    min: 0,
    max: country_codes_array.length - 1
  };

  const index = make_number(settings);

  const value = country_codes_array[index];
  
  return `+${value.code.toString()}`;
}

function make_random_digit_string(length) {
  
  let value = '';

  for(let i = 0; i < length; i++) {
    value += make_number({min: 0, max: 9}).toString();
  }

  return value;
}
module.exports = make_phone;