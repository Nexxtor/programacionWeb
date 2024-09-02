/** This example was designed to run in a web browser's JavaScript console,
 * but it can also be run with Node.js as long as it doesn't include DOM examples. */

(function () {
  'use strict';

  const date = new Date();
  const futureDate = new Date(date);
  futureDate.setDate(date.getDate() + 10); // Add 10 days
  console.log(futureDate); // Outputs: (Date 10 days from now)
  
  const date1 = new Date();
  const date2 = new Date('2024-09-01');
  const diffInMilliseconds = date2 - date1;
  const diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24);
  console.log(diffInDays); // Outputs the difference in days

  
  
})();
