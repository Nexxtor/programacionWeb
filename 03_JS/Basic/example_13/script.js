/** This example was designed to run in a web browser's JavaScript console,
 * but it can also be run with Node.js as long as it doesn't include DOM examples. */


// While Loop

(function () {
  'use strict';
  // Loop While
  let a = 10;

  while (a >= 0) {
    console.log(a);
    a--;
  }

  // Loop Do While
  do {
    console.log(a);
    a++;
  } while (a <= 10);
})();
