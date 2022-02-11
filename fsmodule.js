// FS (File System) Module in Node js ----->  👌
// The fs module enables interacting with the file system in a way modeled on standard POSIX functions.

// fs.readFile()Method ----->
// The fs.readFile() method is an inbuilt method which is used to read the file.
// This method read the entire file into buffer.
// To load the fs module we use require() method.
// For example: var fs = require(‘fs’);

// Syntax - fs.readFile( filename, encoding, callback_function )

const fs = require("fs");

//  fs.readFile('file.txt', 'utf8', (err, data)=>{
//      console.log(err, data)
//     })

// On above line of code
// fs.readFile('first argument', 'encoding of file(utf8)', (callback function) <--- inculdes error and data)
// if any error occurs error will print, otherwise data will get printed

// const a = fs.readFileSync('file.txt')
// console.log(a.toString())                   // to see its string

// _---------------------------------------------------------------------------------------------------------------------------------

// fs.writeFile() Method in Node js ------->

// The fs.writeFile() method is used to asynchronously write the specified data to a file.
// By default, the file would be replaced if it exists.
// The ‘options’ parameter can be used to modify the functionality of the method.

// Syntax -- fs.writeFile( file, data, options, callback()=>{} )

// fs.writeFile('file2.txt', "This is the data", ()=>{
//     console.log("Written to the file")
// })

// console.log("Finished reading file")

b = fs.writeFileSync("file2.txt", "This is the data2");
console.log(b);
console.log("Finished reading file");
