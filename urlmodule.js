// The url module provides utilities for URL resolution and parsing.
// It can be accessed using:
// import url from 'url';

// The URL module splits up a web address into readable parts.

// To include the URL module, use the require() method

import url from "url";

const myURL = new URL("https://example.org:1700");
myURL.pathname = "/a/b/c";
myURL.search = "?d=e";
myURL.hash = "#fgh";

console.log(myURL);
console.log(myURL.href);
