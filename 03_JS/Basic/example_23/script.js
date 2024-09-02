/** This example was designed to run in a web browser's JavaScript console,
 * but it can also be run with Node.js as long as it doesn't include DOM examples. */

(function () {
  const fruits = ['apple', 'banana', 'orange'];
  console.log(fruits);
  const numbers = new Array(1, 2, 3, 4, 5);
  console.log(numbers);
  const firstFruit = fruits[0];
  console.log(firstFruit);

  let list = [2, 3, 5, 7, 11];
  list.push(12); // Add an element in the end of array
  console.log(list);
  console.log(list.pop()); // Extract a last element of array
  console.log(list);

  list.unshift(1); // Add an element beginning of the array
  list.shift(1); // Extract an element beginning of the array

  console.log(list.indexOf(2));
  console.log(list.slice(2, 5));
  console.log(list.slice(5));

  console.log(list.concat([1, 3, 4, 5]));

  const array1 = ['a', 'b', 'c'];

  for (const element of array1) {
    console.log(element);
  }
})();
