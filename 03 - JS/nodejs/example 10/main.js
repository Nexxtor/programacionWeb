'use strict';
/* Read a FILE async */
var fs = require("fs");
console.log('Read a file');
fs.readFile('input.txt', function(err,data){
    if(err) console.log(err); // Can't read the file
    console.log(data.toString());
});
console.log('end');