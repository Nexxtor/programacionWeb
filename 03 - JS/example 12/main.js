'use strict';
const http = require('http');
const url = require('url');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    var objURl = url.parse(req.url,true);
    res.write(JSON.stringify(objURl));
    res.end();
}).listen(8080);

console.log('Listen http://localhost:8080/');