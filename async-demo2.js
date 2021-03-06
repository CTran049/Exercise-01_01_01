/*
    Exercise-01_01_01

    Author: Charley Tran
    Date: 1.10.19

    async-demo2.js
*/

// Loads in the file system package.
var fs = require('fs');

// Asynchronous method, uses an anonymous function.
// Anonymous function is a callback, used to return the data or an error.
// Reads the root directory of the primary hard drive.
fs.readdir('/', function(err, data) {
    // Outputs contents from data variable.
    console.log("data: ", data);
});

// This loads first because the code is asynchronous or something like that.
console.log("This code is executed last.");