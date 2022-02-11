// Event Module in Node js ----->

// Every action on a computer is an event. Like when a connection is made or a file is opened.
// Objects in Node.js can fire events, like the readStream object fires events when opening and closing a file
// Node.js has a built-in module, called "Events", where you can create-, fire-, and listen for- your own events.

// To include the built-in Events module use the require() method.
// In addition, all event properties and methods are an instance of an EventEmitter object.
// To be able to access these properties and methods, create an EventEmitter object

// setTimeout() - The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.

const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("WaterFull", () => {
  console.log("Please turn of the Motor");
  setTimeout(() => {
    console.log("Please turn off the Motor ! Its a gentle reminder");
  }, 3000);
});

// Above code will not get fired until 'WaterFull' events get occured..

console.log("The script is runnning");

console.log("The script is still runnning");
myEmitter.emit("WaterFull"); // you have to call that event on this line
