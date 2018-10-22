'use strict';
/* Read a FILE sync */
var fs = require("fs");
var data = fs.readFileSync('input.txt');

console.log('Read a file');
console.log(data.toString());
console.log('End');