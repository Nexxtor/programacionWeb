const http = require('http');
const fs = require('fs');
const url = require('url');

// Create a server
http.createServer(function (req, res) {
    // Parse the request containing file name
    var pathname = url.parse(req.url).pathname;

    // Print the name of the file for which request is made.
    console.log("Request for " + pathname + " received.");

    // Read the requested file content from file system
    fs.readFile(pathname.substr(1), function (err, data) {
        if (err) {
            console.log(err);
            // HTTP Status: 404 : NOT FOUND
            // Content Type: text/plain
            res.writeHead(404, {
                'Content-Type': 'text/html'
            });
            return res.end("404 Not Found")
        }
        //Page found	  
        // HTTP Status: 200 : OK
        // Content Type: text/plain
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        // Write the content of the file to response body
        res.write(data.toString());


        // Send the response body 
        return res.end();
    });
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');