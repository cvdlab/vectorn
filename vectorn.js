/*!
 * vectorn
 * JavaScript dimension-independent vector library
 * Copyright (c) 2012 Enrico Marino and Federico Spini
 * MIT License
 */

/**
 * Library namespace.
 */
var vectorn = exports;

/**
 * Library version.
 */

vectorn.version = '0.0.5';

/**
 * Vector
 * create a n-dimensional Vector
 *
 * @param {Number} n dimension
 * @return {vectorn.Vector} n-dimensional Vector
 * @api public
 */

vectorn.Vector = function (n) {
  this.n = n;
  this.data = new Float32Array(n);
};

/**
 * get
 * get i-th value
 * 
 * @param {Number} i index
 * @return {Number} the i-th value 
 * @api public
 */

vectorn.Vector.prototype.get = function (i) {
  return this.data[i];
};

/**
 * set
 * set i-th value to `value`
 * 
 * @param {Number} i index
 * @param {Number} value value
 * @return {vectorn.Vector} the vectorntor for chaining 
 * @api public
 */

vectorn.Vector.prototype.set = function (i, value) {
  this.data[i] = value;

  return this;
};

/**
 * forEach
 * apply `iterator` to each value
 * 
 * @param {Function} iterator iterator
 *   @param {Number} value value
 *   @param {Number} i index
 * @return {vectorn.Vector} the vectorntor for chaining 
 * @api public
 */

vectorn.Vector.prototype.each =
vectorn.Vector.prototype.forEach = function (iterator) {
  var n = this.n;
  var data = this.data;
  var i;

  for (i = 0; i < n; i++) {
    iterator(data[i], i);
  }
  
  return this;
};