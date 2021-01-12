var fs = require("fs");
var onFileLoad = function(err, file) {
  console.log("2. Got the file");
}
console.log("1. Get a file");
fs.readFile("shortFile.txt", onFileLoad);
console.log("3. App continues...");