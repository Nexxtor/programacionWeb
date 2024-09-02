/** This example was designed to run in a web browser's JavaScript console,
 * but it can also be run with Node.js as long as it doesn't include DOM examples. */

(function () {
  'use strict';

  const coffees = ['French Roast', 'Colombian', 'Kona'];
  console.log(coffees);

  function createArray() {
    const array = ['Item1', 'Item2'];
    // New array created on each function call
  }

  const fish = ['Lion', , 'Angel'];
  console.log(fish); // Result: [ 'Lion', <1 empty item>, 'Angel' ]

  const myList = ['home', , 'school'];
  console.log(myList); // Length: 3, myList[1] is empty

  const myList2 = [, 'home', , 'school'];
  console.log(myList2); // Length: 4, myList[0] and myList[2] are missing

  const myList3 = ['home', , 'school', ,];
  console.log(myList3); // Length: 4, myList[1] and myList[3] are missing

  const myListHandling = [
    'home', 
    'school', 
    'hospital',
  ];
})();
