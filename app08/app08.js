var childProcess = require("child_process");
console.log("1. Start");
var newProcess = childProcess.spawn("node", ["computation/_fibonacci.js"], {stdio: "inherit"})
console.log("2. End");