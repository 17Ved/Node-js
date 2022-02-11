// Path Module in Node js ------>
// The path module provides utilities for working with file and directory paths

// Windows vs. POSIX
// path.basename(path[, ext])
// path.delimiter
// path.dirname(path)
// path.extname(path)
// path.format(pathObject)
// path.isAbsolute(path)
// path.join([...paths])
// path.normalize(path)
// path.parse(path)
// path.posix
// path.relative(from, to)
// path.resolve([...paths])
// path.sep
// path.toNamespacedPath(path)
// path.win32

const path = require("path");

const a = path.basename("C:\\temp\\myfile.html"); // myfile.html is a base name for this path
console.log(a);

const b = path.dirname("C:\\temp\\myfile.html");
console.log(b);

const c = path.extname(__filename); // returns the extension name of specified file name
console.log(c);
console.log(__filename, c);
