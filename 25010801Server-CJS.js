const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'Text/plain'});
    res.write('Hello Node.js');
    res.end();
});

server.listen(3000, () => {
    console.log('Server run!');
});