/*
    Exercise-01_01_01

    Author: Charley Tran
    Date: 1.10.19

    gulpfile.js
*/

// Loads in the gulp module. 
var gulp = require('gulp');

// Anonymous, asynchronous function; executes default task.
gulp.task('default', async function() {
    console.log("Hello from gulp!");
});