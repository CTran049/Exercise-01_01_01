// Loads in the file system package.
var fs = require('fs'); 

// Holds stuff that is read in the file system.
// Reads the root directory of the primary hard drive synchronously.
var data = fs.readdirSync('/');

// Outputs contents from data variable.
console.log("data: " , data);

console.log("This code is executed last.");