/** This example was designed to run in a web browser's JavaScript console,
 * but it can also be run with Node.js as long as it doesn't include DOM examples. */

(function () {
  'use strict';
  let mySymbol = Symbol();
  let anotherSymbol = Symbol('description');

  const sym1 = Symbol('key1');
  const obj = {};
  obj[sym1] = 'value1';

  console.log(obj[sym1]); // Output: 'value1'

  const globalSym = Symbol.for('globalKey');
  console.log(Symbol.keyFor(globalSym)); // Output: 'globalKey'
})();
