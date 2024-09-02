/** This example was designed to run in a web browser's JavaScript console,
 * but it can also be run with Node.js as long as it doesn't include DOM examples. */

(function () {
  'use strict';

  function lessThan(n) {
    return (m) => m < n;
  }
  let lessThan10 = lessThan(10);
  console.log(lessThan10(4));

  function unless(test, then) {
    if (!test) then();
  }

  unless(2 > 3, (n) => console.log('ok'));
})();
