const make_string = require('./make_string');
const make_number = require('./make_number');
const AT = '@';
const settings = {
  min: 2,
  max: 25
};

function make_email(metadata) {

  let domain = null;

  if(typeof metadata.domain === 'string')
    domain = metadata.domain;

  const name_length = make_number(settings);
  const name = make_string(name_length);

  if(domain === null) {
    const domain_length = make_number(settings);
    domain = make_string(domain_length);
  }

  return `${name}${AT}${domain}`;
}

module.exports = make_email;