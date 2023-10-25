const http = require('http');

const server = http.createServer((req, res) => {
  res.end('My Name: Manoj');
});

const port = 4000;
server.listen(port);