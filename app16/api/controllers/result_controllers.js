module.exports.result = function(req, res) {
  const num1= req.params.num1;
  const num2= req.query.num2;
  const total = parseInt(num1) + parseInt(num2)
  res.status(200).send("Result of num1 " + num1 + " and num2 " + num2 + " is " + total);
}