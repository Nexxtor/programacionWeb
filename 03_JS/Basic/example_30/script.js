/** This example was designed to run in a web browser's JavaScript console,
 * but it can also be run with Node.js as long as it doesn't include DOM examples. */

(function () {
  'use strict';

  const jsonString = '{"name": "John", "age": 25}';
  const jsonObject = JSON.parse(jsonString);
  console.log(jsonObject.name); // Output: John

  const jsObject = { name: 'Jane', age: 30 };
  const jsonStr = JSON.stringify(jsObject);
  console.log(jsonStr); // Output: {"name":"Jane","age":30}
})();
