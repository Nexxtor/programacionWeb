/** This example was designed to run in a web browser's JavaScript console,
 * but it can also be run with Node.js as long as it doesn't include DOM examples. */

(function () {
  'use strict';

  function repeat(n, action) {
    for (let i = 0; i < n; i++) {
      action(i);
    }
  }

  let departments = [];
  repeat(5, (i) => departments.push(`Department ${i}`));
  console.log({ departments }); // Only for get a name of the var
})();
