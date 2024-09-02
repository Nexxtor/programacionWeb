/** This example was designed to run in a web browser's JavaScript console,
 * but it can also be run with Node.js as long as it doesn't include DOM examples. */

(function () {
  'use strict';

  function minus(a, b) {
    if (b === undefined) return -a;
    else return a - b;
  }
  
  console.log(minus(10));
  console.log(minus(10, 5));
  
  function power(base, exponent = 2) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
      result *= base;
    }
    return result;
  }

  console.log(power(16));

  function myCarFunc(theObject) {
    theObject.make = 'Toyota';
  }

  const myCar = {
    make: 'Honda',
    model: 'Accord',
    year: 1998,
  };

  console.log(myCar.make); // "Honda"
  myCarFunc(myCar);
  console.log(myCar.make); // "Toyota"
  
  // Anonymous Function Example
  const square2 = function (number) {
    return number * number;
  };
  console.log(square2(4)); // 16

  // Named Function Expression Example
  const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
  };
  console.log(factorial(3)); // 6
  
  function map(f, a) {
    const result = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
      result[i] = f(a[i]);
    }
    return result;
  }
  
  const cube = function (x) {
    return x * x * x;
  };
  
  const numbers = [0, 1, 2, 5, 10];
  console.log(map(cube, numbers)); // [0, 1, 8, 125, 1000]
  
})();
