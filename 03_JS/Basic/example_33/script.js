/** This example was designed to run in a web browser's JavaScript console,
 * but it can also be run with Node.js as long as it doesn't include DOM examples. */

(function () {
  'use strict';

  let journal = [];

  function addEntry(events, accident) {
    journal.push({ events, accident });
    /******************************************
     * Is {events, accident}  shorthand to    *
     * {events: events, accident: accident}   *
     *****************************************/
  }

  addEntry(['weekend', 'cycling', 'break', 'peanuts', 'beer'], true);
  addEntry(['weekend', 'cycling', 'break'], false);
})();
