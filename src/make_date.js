const make_number = require('./make_number');
const default_options = {
  min: new Date(1900, 1, 1).getTime(),
  max: new Date(Date.now()).getTime()
};

function make_date(range) {

  const options = make_options(range);

  const milliseconds = make_number(options);

  return new Date(milliseconds);
}

function make_options(range) {

  if(typeof range !== 'object')
    return default_options;

  if(!(range.min instanceof Date))
    return default_options;

  if(!(range.max instanceof Date))
    return default_options;

  if(range.min.getTime() >= range.max.getTime())
    return default_options;
  
  return {
    min: range.min.getTime(),
    max: range.max.getTime()
  };
}

module.exports = make_date;