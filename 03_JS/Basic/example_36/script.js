/** This example was designed to run in a web browser's JavaScript console,
 * but it can also be run with Node.js as long as it doesn't include DOM examples. */

(function () {
  'use strict';

  function filter(array, test) {
    let passed = [];
    for (let element of array) {
      if (test(element)) {
        passed.push(element);
      }
    }
    return passed;
  }

  console.log(filter([1, 3, 5, 6, 7, 10], (e) => e % 2 == 0));

  console.log([1, 3, 5, 6, 7, 10].filter((e) => e % 2 == 0));
})();
