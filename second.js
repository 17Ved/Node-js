// (function(exports, require, module, filename, __dirname){     // Module wrapper function
// node js automatically wraps all modules while using module wrapper function
ved = {
  name: "Vedant",
  favNum: 17,
  developer: true,
};

console.log(exports, require, module, __filename, __dirname);

module.exports = ved; // import and export in node.js
