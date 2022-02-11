// What is Express Node?
// Express is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications.
// It facilitates the rapid development of Node based Web applications.

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("This is about page");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
