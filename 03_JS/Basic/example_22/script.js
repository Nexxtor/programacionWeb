/** This example was designed to run in a web browser's JavaScript console,
 * but it can also be run with Node.js as long as it doesn't include DOM examples. */

(function () {
  'use strict';

  // binding function
  function play() {
    console.log('Ta Ta Taaaaaaaaaaaaa');
  }

  var scream = function () {
    console.log('Aaaaahhhh!!');
  };

  var motivate = () => {
    console.log('Just do it!');
  };

  play();
  scream();
  motivate();
})();
