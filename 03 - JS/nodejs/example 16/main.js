const http = require('http'),
    fs = require('fs'),
    url = require('url'),
    {
        parse
    } = require('querystring');
mimeTypes = {
    "html": "text/html",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "png": "image/png",
    "js": "text/javascript",
    "css": "text/css"
};;

// Create a server
http.createServer(function (req, res) {
    // Parse the request containing file name
    var pathname = url.parse(req.url).pathname;

    // Print the name of the file for which request is made.
    console.log("Request for " + pathname + " received.");

    // Default Page
    if (pathname == '/') {
        pathname += 'index.html';
    }

    if (req.method === 'POST') {
        // Is need validate a URL
        collectRequestData(req, (err, result) => {
            if (err) {
                res.writeHead(400, {
                    'content-type': 'text/html'
                });
                return res.end('Bad Request');
            }
            console.log(result);
            return res.end(`Hi! ${result.username}`);
        });
    }

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
        // Page found	  
        // HTTP Status: 200 : OK
        // Content Type: text/plain
        res.writeHead(200, {
            'Content-Type': mimeTypes[pathname.split('.').pop()] || 'text/html'
        });

        // Write the content of the file to response body
        res.write(data.toString());


        // Send the response body 
        return res.end();
    });
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');

/**
 * application/x-www-form-urlencoded	Default. All characters are encoded before sent (spaces are converted 
 *                                      to "+" symbols, and special characters are converted to ASCII HEX values)
 * multipart/form-data              	No characters are encoded. This value is required when you are using forms 
 *                                      that have a file upload control
 * text/plain                           spaces are converted to "+" symbols, but no special characters are encoded
 */


function collectRequestData(request, callback) {
    const FORM_URLENCODED = 'application/x-www-form-urlencoded';
    if (request.headers['content-type'] === FORM_URLENCODED) {
        let body = '';
        // Event to acumulate data
        request.on('data', chunk => {
            body += chunk.toString();
        });
        // Whe the data is complete recived
        request.on('end', () => {
            callback(null, parse(body));
        });
    } else {
        callback({
            msg: `The content-type don't is equals to ${FORM_URLENCODED}`
        });
    }
}