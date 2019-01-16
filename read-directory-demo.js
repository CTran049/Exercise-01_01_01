/*
    Exercise-01_01_01

    Author: Charley Tran
    Date: 1.14.19

    read-directory-demo.js
*/

// Loads in the file system module.
var fs = require('fs');

// Reads the directory. It is asynchronous and has an anonymous function.
fs.readdir('/', function(err, data) {
    // Outputs the data, which is the directory in this case.
    console.log(data);
});

