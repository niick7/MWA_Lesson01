const express = require("express");
const app = express();

const routes = require("./api/routes");
app.use("/", routes);

app.set("port", 3000);

const server = app.listen(app.get("port"), function(req, res) {
  const port = server.address().port;
  console.log("Listening to port " + port);
})