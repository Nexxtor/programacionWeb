/** This example was designed to run in a web browser's JavaScript console,
 * but it can also be run with Node.js as long as it doesn't include DOM examples. */

// Type conversion

(function () {
  'use strict';
  let answer = 42;
  console.log(answer);
  answer = 'Thanks for all the fish!'; // No error, type is dynamically changed
  console.log(answer);

  x = 'The answer is ' + 42; // Result: "The answer is 42"
  console.log(x);
  y = 42 + ' is the answer'; // Result: "42 is the answer"
  console.log(y);
  z = '37' + 7; // Result: "377"
  console.log(z);

  console.log('37' - 7); // Result: 30
  console.log('37' * 7); // Result: 259

  console.log(parseInt('101', 2)); // Result: 5 (binary to decimal conversion)
  console.log('1.1' + '1.1'); // Result: "1.11.1" (string concatenation)
  console.log(+'1.1' + +'1.1'); // Result: 2.2 (number addition)
})();
