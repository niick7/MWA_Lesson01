var express = require("express");
var app = express();
var path = require("path");
app.set("port", 3000);
app.get("/", function(res, req) {
  console.log("GET received");
  req.status(200).sendFile(path.join(__dirname, "public/index.html"));
})

app.use("/public", express.static(path.join(__dirname, "public")));

var server = app.listen(app.get("port"), function() {
  var port = server.address().port;
  console.log("Listening to port " + port);
});