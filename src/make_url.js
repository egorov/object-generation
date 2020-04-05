const make_string = require('./make_string');
const make_number = require('./make_number');
const default_options = {
  min: 2, 
  max: 4088
};

function make_url() {

  const length = make_number(default_options);

  const address = make_string(length);

  return `https://${address}`;
}
module.exports = make_url;