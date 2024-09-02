/** This example was designed to run in a web browser's JavaScript console,
 * but it can also be run with Node.js as long as it doesn't include DOM examples. */

(function () {
  'use strict';
  const now = new Date();
  console.log(now); // Outputs the current date and time

  const specificDate = new Date('2024-09-01T10:00:00');
  console.log(specificDate); // Outputs: Sat Sep 01 2024 10:00:00 GMT...

  const dateFromComponents = new Date(2024, 8, 1, 10, 0, 0); // Note: Month is zero-indexed
  console.log(dateFromComponents); // Outputs: Sun Sep 01 2024 10:00:00 GMT...

  const date = new Date();
  console.log(date.getFullYear()); // Outputs the current year
  console.log(date.getMonth()); // Outputs the current month (0-11)
  console.log(date.getDate()); // Outputs the current day of the month

  console.log(date.getHours()); // Outputs the current hour
  console.log(date.getMinutes()); // Outputs the current minute
  console.log(date.getSeconds()); // Outputs the current second

  const date2 = new Date();
  date2.setFullYear(2025);
  date2.setMonth(11); // December
  date2.setDate(25);
  console.log(date2); // Outputs: Thu Dec 25 2025 ...

  date2.setHours(15);
  date2.setMinutes(30);
  date2.setSeconds(45);
  console.log(date2); // Outputs: Thu Dec 25 2025 15:30:45 GMT...

  console.log(date.toDateString()); // Outputs: Fri Sep 01 2024

  console.log(date.toTimeString()); // Outputs: 10:00:00 GMT+0000 (Coordinated Universal Time)

  console.log(date.toLocaleDateString()); // Outputs: 9/1/2024 (depends on locale)
  console.log(date.toLocaleTimeString()); // Outputs: 10:00:00 AM (depends on locale)
})();
