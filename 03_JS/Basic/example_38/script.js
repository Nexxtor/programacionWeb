/** This example was designed to run in a web browser's JavaScript console,
 * but it can also be run with Node.js as long as it doesn't include DOM examples. */

(function () {
  'use strict';

  function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
      current = combine(current, element);
    }
    return current;
  }

  console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));

  console.log([1, 2, 3, 4].reduce((a, b) => a + b, 0));
})();
