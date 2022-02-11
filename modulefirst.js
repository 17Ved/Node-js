// this is the example of Common Js Module
// CSM

// const simple = require("./modulesecond")

// simple()

// This is the example of Ecmascript Module
// ESM

// You'll get error if you don't add "type" module in package.json --->
// "type": "module",   <---- in package.json.

// import { simple } from "./modulesecond.mjs";

// simple()

// you can import simple2 function as simple also ---->

// import {simple2 as simple} from "./modulesecond.mjs";

// simple()

// OR

import simple2 from "./modulesecond.mjs";

simple2();

// import * as a2 from "./modulesecond.mjs"

// console.log(a2.simple())
