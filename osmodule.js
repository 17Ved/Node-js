// OS Modules in Node ---------> 🤩
// OS is and built in module
// That's why we don't put ./before it
// For importing built in modules in node js, just write that module's name.
// The os module provides operating system-related utility methods and properties.

// OS Modules name ---->
// os.EOL
// os.arch()
// os.constants
// os.cpus()
// os.devNull
// os.endianness()
// os.freemem()
// os.getPriority([pid])
// os.homedir()
// os.hostname()
// os.loadavg()
// os.networkInterfaces()
// os.platform()
// os.release()
// os.setPriority([pid, ]priority)
// os.tmpdir()
// os.totalmem()
// os.type()
// os.uptime()
// os.userInfo([options])
// os.version()

// for using os module, first we need to import it
const os = require("os");

console.log(os.freemem());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.platform());
console.log(os.release());
console.log(os.type());
console.log(os.EOL());
