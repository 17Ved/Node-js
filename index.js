// Blocking io model in node js ---->

// Blocking is when the execution of additional JavaScript in the Node.js process must wait until a non-JavaScript operation completes.
// This happens because the event loop is unable to continue running JavaScript while a blocking operation is occurring.
// In Node.js, JavaScript that exhibits poor performance due to being CPU intensive rather than waiting on a non-JavaScript operation, such as I/O, isn't typically referred to as blocking.
// Synchronous methods in the Node.js standard library that use libuv are the most commonly used blocking operations.
// Native modules may also have blocking methods.

// Non Blocking io model in node js --->

// It refers to the program that does not block the execution of further operations.
// Non-Blocking methods are executed asynchronously.
// Asynchronously means that the program may not necessarily execute line by line.
// The program calls the function and move to the next operation and does not wait for it to return.

// NPM in Node js --
// NPM is a package manager for Node.js packages, or modules if you like.
// www.npmjs.com hosts thousands of free packages to download and use.
// The NPM program is installed on your computer when you install Node.js.

// Package in Nodejs --
// A package in Node.js contains all the files you need for a module.
// Modules are JavaScript libraries you can include in your project.

// Dependencies in Node js --
// The dependencies value is used to specify any other modules that a given module (represented by the package. json ) requires to work.
// When you run npm install from the root folder of a given module, it will install any modules listed in that dependencies hash.

// Package-lock json in Node js --
// package-lock. json is automatically generated for any operations where npm modifies either the node_modules tree, or package. json .
// It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates.

const ved = require("./second"); // import and export in node.js
console.log("Hello World", ved);
