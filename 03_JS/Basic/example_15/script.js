/** This example was designed to run in a web browser's JavaScript console,
 * but it can also be run with Node.js as long as it doesn't include DOM examples. */

(function () {
  'use strict';

  // !! double negate the value and print console how the value is evaluated
  console.log(!!false);
  console.log(!!undefined);

  console.log(!!null);

  console.log(!!0);

  console.log(!!NaN);

  console.log(!!'');

  console.log(!!12);
  console.log(!!'as');

})();
