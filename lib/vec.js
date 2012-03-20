
/*!
 * vec
 * JavaScript dimension-independent Vector library
 * Copyright (c) 2012 Enrico Marino (http://onirame.no.de)
 * MIT License
 */

 !(function (exports) {

  /**
   * Library namespace.
   */
  var vec = exports.vec = {};

  /**
   * Library version.
   */

  vec.version = '0.0.1';

  /**
   * Vec
   * create a n-dimensional Vector
   *
   * @param {Number} n dimension
   * @return {vec.Vec} n-dimensional Vector
   * @api public
   */

  vec.Vec = function (n) {
    this.n = n;
    this.v = new Float32Array(n);
  };

  /**
   * get
   * get i-th value
   * 
   * @param {Number} i index
   * @return {Number} the i-th value 
   * @api public
   */

  vec.Vec.prototype.get = function (i) {
    return this.v[i];
  };

  /**
   * set
   * set i-th value to `value`
   * 
   * @param {Number} i index
   * @param {Number} value value
   * @return {vec.Vec} the vector for chaining 
   * @api public
   */

  vec.Vec.prototype.set = function (i, value) {
    this.v[i] = value;
    return this;
  };

 }(this));