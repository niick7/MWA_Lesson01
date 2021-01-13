const express = require("express");
const router = express.Router();

const resultControllers = require("../controllers/result_controllers.js");
router.route("/result/:num1").get(resultControllers.result);

module.exports = router;