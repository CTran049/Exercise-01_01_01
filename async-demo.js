/*
    Exercise-01_01_01

    Author: Charley Tran
    Date: 1.10.19

    async-demo.js
*/

// Loads in the file system package.
var fs = require('fs');

// Function is a callback, used to return the data or an error.
function phoneNumber(err, data) {
    // Outputs contents from data variable.
    console.log("data: ", data);
}

// Asynchronous method, uses the callback.
// Reads the root directory of the primary hard drive.
fs.readdir('/', phoneNumber);

// This loads first because the code is asynchronous or something like that.
console.log("This code is executed last.");