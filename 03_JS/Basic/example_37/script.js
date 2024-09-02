/** This example was designed to run in a web browser's JavaScript console,
 * but it can also be run with Node.js as long as it doesn't include DOM examples. */

(function () {
  'use strict';
  function map(array, transform) {
    let mapped = [];
    for (let element of array) {
      mapped.push(transform(element));
    }
    return mapped;
  }

  let cars = [
    { brand: 'Toyota', year: '1990' },
    { brand: 'Dogge', year: '2020' },
    { brand: 'Pollito', year: '2018' },
  ];

  console.log(map(cars, (e) => e.brand));


  console.log(cars.map((e) => e.brand));
})();
