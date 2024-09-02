/** This example was designed to run in a web browser's JavaScript console,
 * but it can also be run with Node.js as long as it doesn't include DOM examples. */

// Variable Hoisting

(function () {
  'use strict';
  console.log(x); // undefined
  var x = 3;
  
  function test() {
    console.log(y); // undefined
    var y = "local value";
  }
  
})();
