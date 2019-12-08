const http = require('http');

const server = http.createServer(
 (request, result) => {
   const name = request.url;
   result.writeHead(200, { 'Content-Type': 'text/html'});
   result.end(`<h1>Hello ${name}</h1>`);
 }
);
server.listen(8080, 'localhost');