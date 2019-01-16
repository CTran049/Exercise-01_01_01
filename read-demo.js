/*
    Exercise-01_01_01

    Author: Charley Tran
    Date: 1.11.19

    read-demo.js
*/

// Loads in the file system module.
var fs = require('fs');

// Reads the contents of data1.json. It is asynchronous and uses an anonymous function.
// 'utf-8' Loads the data into text.
fs.readFile('./data1.json', 'utf-8', function(err, data) {
    // Outputs the data of the file.
    console.log(data);
    // Reads and converts the data into JSON.
    data = JSON.parse(data);
    // Outputs the JSON.
    console.log(data.name);
});