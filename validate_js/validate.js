
var data = require('../data.js');
var validate = require('./zeetoval.js');

// var validate = require("validate.js");

// validate.validators.zipcodeUS = function(value, options, key, attributes) {
//   var regexp = new RegExp(/^\d{5}(?:[- ]?\d{4})?$/);
//   return (regexp.test(value)) ? null: 'is not a valid US Zipcode';
// };

var userConstraints = {
  email: {
    presence: true,
    email: true
  },
  phone: {
    length: {is: 10},
    numericality: {
      onlyInteger: true
    }
  },
  first_name: {
    presence: true,
    length: {
      minimum: 2
    }
  },
  last_name: {
    presence: true,
    length: {
      minimum: 2
    }
  },
  address: {
    presence: true,
    length: {
      minimum: 2
    }
  },
  zip: {
    presence: true,
    zipcodeUS: true
  }
};


var test = function (data) {

  var validation = validate(data, userConstraints);

  if (validation) {
    console.log('Error:\n', validation);
  } else {
    console.log('all good here');
  }
}


test(data.good);
test(data.bad);
