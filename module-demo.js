/*
    Exercise-01_01_01

    Author: Charley Tran
    Date: 1.11.19

    module-demo.js
*/

// Loads in my-module.js; './my-module.js' tells it where it's located.
var myModule = require('./my-module.js');

// Outputs attribute 'myText' from my-module.js. 
console.log("Text from the external module: ", myModule.myText);

