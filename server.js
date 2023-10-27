const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;

  res.setHeader('Content-Type', 'text/plain');
  if (url === '/home') {
    res.write('Welcome home');
  } else if (url === '/about') {
    res.write('Welcome to About Us page');
  } else if (url === '/node') {
    res.write('Welcome to my Node.js project');
  } else {
    res.statusCode = 404; 
    res.write('Not Found');
  }
  res.end();
});

const port = 4000;
server.listen(port);