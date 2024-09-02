/** This example was designed to run in a web browser's JavaScript console,
 * but it can also be run with Node.js as long as it doesn't include DOM examples. */

// Variable Scope

(function () {
  'use strict';
  if (Math.random() > 0.5) {
    const y = 5;
  }
  console.log(y); // ReferenceError: y is not defined
})();
