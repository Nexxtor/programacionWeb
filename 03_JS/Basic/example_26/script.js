/** This example was designed to run in a web browser's JavaScript console,
 * but it can also be run with Node.js as long as it doesn't include DOM examples. */

(function () {
  'use strict';
  const regex = /hello/;
  console.log(regex.test('hello world')); // true

  const regex2 = /h.llo/;
  console.log(regex2.test('hello')); // true
  console.log(regex2.test('hallo')); // true

  const regex3 = /ho*/;
  console.log(regex3.test('hoop')); // true
  console.log(regex3.test('h')); // true

  const regex4 = /\d/;
  console.log(regex4.test('There are 3 apples')); // true

  const regex5 = /[a-z]/;
  console.log(regex5.test('Hello')); // true

  const regex6 = /\d{2,4}/;
  console.log(regex6.test('123')); // true
  console.log(regex6.test('1')); // false

  const regex7 = /^hello/;
  console.log(regex7.test('hello world')); // true
  console.log(regex7.test('world hello')); // false

  const regex8 = /\bworld\b/;
  console.log(regex8.test('hello world!')); // true
  console.log(regex8.test('helloworld')); // false

  const regex9 = /(abc)+/;
  console.log(regex9.test('abcabc')); // true

  const regex10 = /hello/i;
  console.log(regex10.test('Hello')); // true

  const regex11 = /\d+/g;
  console.log('There are 123 and 456'.match(regex11)); // ["123", "456"]

  const regex12 = /apples/g;
  console.log('I like apples'.replace(regex12, 'oranges')); // "I like oranges"
})();
