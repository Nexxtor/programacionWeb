/** This example was designed to run in a web browser's JavaScript console,
 * but it can also be run with Node.js as long as it doesn't include DOM examples. */

// Switch statement

(function () {
  'use strict';
  switch (prompt('What is the weather like?')) {
    case 'rainy':
      console.log('Remember to bring an umbrella.');
      break;
    case 'sunny':
      console.log('Dress lightly.');
    case 'cloudy':
      console.log('Go outside.');
      break;
    default:
      console.log('Unknown weather type!');
      break;
  }
})();
