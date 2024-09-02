/** This example was designed to run in a web browser's JavaScript console,
 * but it can also be run with Node.js as long as it doesn't include DOM examples. */

(function () {
  'use strict';

  const num1 = 20;
  const num2 = 3;
  const name = 'Chamakh';

  function multiply() {
    return num1 * num2;
  }

  console.log(multiply()); // 60

  function getScore() {
    const num1 = 2;
    const num2 = 3;
    function add() {
      return `${name} scored ${num1 + num2}`;
    }
    return add();
  }

  console.log(getScore()); // "Chamakh scored 5"
})();
