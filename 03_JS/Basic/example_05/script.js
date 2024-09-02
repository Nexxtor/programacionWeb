/** This example was designed to run in a web browser's JavaScript console,
 * but it can also be run with Node.js as long as it doesn't include DOM examples. */

// Numbers

(function () {
  'use strict';
  console.log(10 - 10);
  console.log(10.2 - 10.2);

  console.log(typeof 10);

  //  10 x 10 ^ 2
  console.log(10e2);
  //  -10 x 10 ^ 3
  console.log(-10e3);

  console.log(0.123456789);

  console.log(0, 117, 123456789123456789n); // decimal, base 10
  console.log(0o15, 0o001, 0o777777777777n); // octal, base 8
  console.log(0x1123, 0x00111, 0x123456789abcdefn); // hexadecimal, "hex" or base 16
  console.log(0b11, 0b0011, 0b11101001010101010101n); // binary, base 2
})();
