/*
    Exercise-01_01_01

    Author: Charley Tran
    Date: 1.11.19

    read-demo.js
*/

// Loads in the file system module.
var fs = require('fs');

fs.readFile('./data1.json', function(err, data) {
    console.log(data);
});