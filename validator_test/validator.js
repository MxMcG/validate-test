var validator = require('validator.js').validator();
var is = require('validator.js').Assert;
var data = require('../data.js');
var badData = data.bad;
var goodData = data.good;

var zipCodeUs = is.callback( function ( value ) {
  var regexp = new RegExp(/^\d{5}(?:[- ]?\d{4})?$/);
  return regexp.test(value);
});

var constraint = {
  email: is.notBlank(),
  phone: is.notBlank(),
  first_name: [ is.ofLength( { min: 4, max: 25 } ) ],
  last_name: is.notBlank(),
  address: is.notBlank(),
  zip: [is.notBlank(), zipCodeUs],
  dob_month: is.notBlank(),
  dob_year: is.notBlank(),
  city: is.notBlank(),
  state: is.notBlank()
};



console.log("should fail", validator.validate( badData, constraint ).first_name[0].violation);
console.log("should pass", validator.validate( goodData, constraint ));

