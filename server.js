const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body>');

    // Read and display the latest message from the file
    const message = fs.readFileSync('message.txt', 'utf8').trim();
    res.write('<h2>Message:</h2>');
    res.write('<p>' + message + '</p>');
  
    res.write(
      `<form action="/message" method="POST">
        <input type="text" name="message" placeholder="Enter a message">
        <button type="submit">Submit</button>
      </form>`
    );
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }

  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFileSync('message.txt', message);

      // Redirect after writing the file
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    });
  }
});

const port = 4000;
server.listen(port);
