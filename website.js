// Client can't see this backend code --->

const http = require("http");
const fs = require("fs");
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  if (req.url == "/") {
    res.statusCode = 200;
    const data = fs.readFileSync("index.html");
    res.end(data.toString());
  } else if (req.url == "/cwh") {
    res.statusCode = 200;
    res.end(
      "<h1> This is Vedant</h1>  <p> Hey this is the way to rock the world !!! </p>"
    );
  } else if (req.url == "/about") {
    res.statusCode = 200;
    res.end("<h1> About Vedant</h1>  <p> This is about Node JS !!! </p>");
  } else {
    res.statusCode = 404;
    res.end(
      "<h1> Page not found</h1>  <p> This page is not found on server!!! </p>"
    );
  }
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
