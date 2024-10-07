const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

const PORT = process.env.port || 3000;

function renderForm(response) {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(`
        <html>
        <head><title>Greeting Form</title></head>
        <body>
            <h1>Enter your name to be greeted:</h1>
            <form action="/greet" method="POST">
                <input type="text" name="name" placeholder="Your Name" required />
                <button type="submit">Submit</button>
            </form>
        </body>
        </html>
    `);
  response.end();
}

http
  .createServer((req, res) => {
    const parsedUrl = url.parse(req.url);

    if (parsedUrl.pathname === '/' && req.method === 'GET') {
      renderForm(res);
    } else if (parsedUrl.pathname === '/greet' && req.method === 'POST') {
      let body = '';

      req.on('data', (chunk) => {
        body += chunk.toString();
      });

      req.on('end', () => {
        const parsedBody = querystring.parse(body);
        const name = parsedBody.name;

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`
                <html>
                <head><title>Greeting</title></head>
                <body>
                    <h1>Hello, ${name}!</h1>
                    <a href="/">Go back</a>
                </body>
                </html>
            `);
        res.end();
      });
    } else {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.write('<h1>404 Not Found</h1>');
      res.end();
    }
  })
  .listen(3000, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
  });
