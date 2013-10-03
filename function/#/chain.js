'use strict';

var callable = require('../../object/valid-callable')
  , aFrom    = require('../../array/from')

  , apply = Function.prototype.apply

  , callFn;

callFn = function (result, fn) {
	return [apply.call(fn, this, result)];
};

module.exports = function () {
	var fns = [this].concat(aFrom(arguments));
	fns.forEach(callable);
	return function () {
		return fns.reduce(callFn.bind(this), arguments)[0];
	};
};