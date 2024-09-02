/** This example was designed to run in a web browser's JavaScript console,
 * but it can also be run with Node.js as long as it doesn't include DOM examples. */

(function () {
  'use strict';

  function getMonthName(mo) {
    mo--; // Adjust month number for array index
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    if (months[mo]) {
      return months[mo];
    } else {
      throw new Error('InvalidMonthNo');
    }
  }

  let monthName = '';
  try {
    let myMonth = prompt('Insert a moth number');
    let monthName = getMonthName(myMonth);
    console.log(monthName);
  } catch (e) {
    monthName = 'unknown';
    console.error(e); // Handle the error
  }
})();
