/** This example was designed to run in a web browser's JavaScript console,
 * but it can also be run with Node.js as long as it doesn't include DOM examples. */

// Boolean

(function () {
  'use strict';
  //  Boolean Values
  console.log(true);
  console.log(false);

  console.log(5 > 2);
  console.log(5 >= 2);
  console.log(3 < 4);
  console.log(4 <= 4);
  console.log(5 != 5);
  console.log(5 == 5);
  console.log('5' == 5);
  console.log(5 === 5);
  console.log('5' !== 5);

  console.log(null || 2);
  console.log(null && 2);

  console.log(true || false);
  console.log(true && false);

  console.log(!true);
  console.log(!false);

  console.log(NaN == NaN); // → false
})();
