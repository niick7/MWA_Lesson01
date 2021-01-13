module.exports.result = function(req, res) {
  var num1= req.params.num1;
  var num2= req.params.num2;
  res.status(200).send("Result of num1 " + num1 + " and num2 " + num2 + " is " + num1 + num2);
}