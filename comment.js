// Create web server
// Load HTTP module
const http = require("http");

// Create HTTP server and listen on port 8000 for requests
const server = http.createServer((request, response) => {

    // Set the response HTTP header with HTTP status and Content type
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // Send the response body "Hello World"
    response.end('Hello World\n');
});

server.listen(8000);

// Print URL for accessing server
console.log('Server running at http://127.0.0.1:8000/');
