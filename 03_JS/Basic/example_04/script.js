/** This example was designed to run in a web browser's JavaScript console,
 * but it can also be run with Node.js as long as it doesn't include DOM examples. */

// Global Variables

var global = 'global';

(function () {
  'use strict';
  console.log(global);
  console.log(window.global);
  console.log(globalThis.global);
})();
