/*
    Exercise-01_01_01

    Author: Charley Tran
    Date: 1.14.19

    write-file-demo.js
*/

// Loads in the file system module.
var fs = require('fs');

// Creates a JSON string and puts it in a variable.
var jsonstring = {
    "name": "Jake",
    "age": 70
}

// Overwrites the file with the JSON string.
// Stringify converts the var into a JSON string...?
fs.writeFile('./data2.json', JSON.stringify(jsonstring), function(err) {
    if(err) {
        console.log(err);
    }
});