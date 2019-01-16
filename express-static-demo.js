/*
    Exercise-01_01_01

    Author: Charley Tran
    Date: 1.14.19

    express-static-demo.js
*/

// Loads in Express module.
var express = require('express');
var app = express();

// Server port.
var port = 8080;

// Looks for static file, which is index.html in this case, and then loads it.
app.use(express.static(__dirname));

// Listens for connections on host and port.
app.listen(port, function() {
    console.log("Serving listening on localhost:%s", port);
});