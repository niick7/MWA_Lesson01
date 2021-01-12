var fs = require("fs");
console.log("1. Get a file");
fs.readFile("./shortFile.txt", function(err, file){
  console.log("2. Got the file");
});
console.log("3. App continues...");