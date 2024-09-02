/** This example was designed to run in a web browser's JavaScript console,
 * but it can also be run with Node.js as long as it doesn't include DOM examples. */

(function () {
  'use strict';
  function Animal(type) {
    this.type = type;
  }
  Animal.prototype.speak = function () {
    console.log(`The ${this.type} speaks.`);
  };
  const cat = new Animal('cat');
  cat.speak(); // Outputs: "The cat speaks."
})();
