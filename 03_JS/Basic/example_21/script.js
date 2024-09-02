/** This example was designed to run in a web browser's JavaScript console,
 * but it can also be run with Node.js as long as it doesn't include DOM examples. */

(function () {
  'use strict';
  function min(...numbers) {
    let result = Infinity;
    for (let number of numbers) {
      if (number < result) result = number;
    }
    return result;
  }

  console.log(min(10, 3, 5));

  let words = ['never', 'fully'];
  console.log(['will', ...words, 'understand']);
})();
