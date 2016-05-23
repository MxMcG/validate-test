

var ZeetoVal = require("validate.js");

ZeetoVal.validators.zipcodeUS = function(value, options, key, attributes) {
  var regexp = new RegExp(/^\d{5}(?:[- ]?\d{4})?$/);
  return (regexp.test(value)) ? null: 'is not a valid US Zipcode';
};

module.exports = ZeetoVal;


var IZ = {
  zipcodeUS: function(options) {
    var regexp = new RegExp(/^\d{5}(?:[- ]?\d{4})?$/);
    return function () {
      return regexp.test(value);
    }
  }
}

console.log(is.ofLength);

console.log(is.ofLength());

console.log(is.ofLength()(0));


var factory = is.ofLength;

var assert = factory();

var assertionValue = assert();
