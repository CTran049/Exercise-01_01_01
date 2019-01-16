/*
    Exercise-01_01_01

    Author: Charley Tran
    Date: 1.14.19

    express-static-demo.js
*/

// Loads in express module.
var express = require('express');
var app = express();
// Loads file system module.
var fs = require('fs');
// Server port.
var port = 8080;

// Responds when user connects to /message.
app.use('/message', function(req, res) {
    console.log("User requested an endpoint!");
    res.send("<h2>Hello from the server endpoint!</h2>")
});

// When connected, data2.json is read and outputted into text.
app.use('/users', function(req, res) {
    fs.readFile('./data2.json', 'utf-8', function(err, data) {
        res.send(data);
    });
});

// Listens for connections on host and port.
app.listen(port, function() {
    console.log("Serving listening on localhost:%s", port);
});