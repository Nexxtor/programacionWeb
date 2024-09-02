/** This example was designed to run in a web browser's JavaScript console,
 * but it can also be run with Node.js as long as it doesn't include DOM examples. */

// Strings

(function () {
  'use strict';
  // String Values
  console.log('I am a String');
  console.log("I am a String");
  console.log("Scape character ' ");
  console.log('Scape character " ');
  console.log(
    'Multi line \
  console.log( Multi line string'
  );

  // Template String
  console.log(`half of 100 is ${100 / 2}`); // half of 100 is 50

  // String Values
  console.log('a' + 'b');
  console.log('a'.length);
  console.log('abcdefg'[0]);
  console.log('abcdefg'[3]);
  console.log('a,b,c,d'.split(','));
  console.log('   ok   '.trim()); // "OK"
})();
