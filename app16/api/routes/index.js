const express = require("express");
const app = express();

const resultControllers = require("../controllers/result_controllers.js");
app.route("/result/:num1").get(resultControllers.result);