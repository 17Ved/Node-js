const http = require("http");

const port = process.env.PORT || 3000;

// What is 🤔 process.env.PORT || 3000;
// In many environments (e.g. Heroku), and as a convention, you can set the environment variable PORT to tell your web server what port to listen on.
// So process.env.PORT || 3000 means: whatever is in the environment variable PORT, or 3000 if there's nothing there.

// The http.createServer() method turns your computer into an HTTP server.
// The http.createServer() method creates an HTTP Server object.
// The HTTP Server object can listen to ports on your computer and execute a function, a requestListener, each time a request is made.

// HTTP Status Code-
// HTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes:

// Informational responses (100–199)
// Successful responses (200–299)
// Redirection messages (300–399)
// Client error responses (400–499)
// Server error responses (500–599)

// HTTP Headers-
// HTTP headers let the client and the server pass additional information with an HTTP request or response.
// An HTTP header consists of its case-insensitive name followed by a colon (:), then by its value. Whitespace before the value is ignored.

// Content-Type tells the client that what type of content has been send by the server.

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html"); // Here request will be get server as html
  res.end(
    "<h1> This is Vedant</h1>  <p> Hey this is the way to rock the world !!! </p>"
  );
}); // this is one of the module in httpserver to create server.

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
