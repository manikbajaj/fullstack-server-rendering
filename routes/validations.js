var express = require("express");
var router = express.Router();
var { validationResult } = require("express-validator");
var emailValidator = require("../validators/formValidators/email.validator.js");

router.post("/email", emailValidator, function (req, res, next) {
  const result = validationResult(req);

  console.log(result.array());

  /* This HTML will be added inside the input tag */
  res.render(`validations/testValidation`, { layout: false });
});

router.post("/password", function (req, res, next) {
  console.log(req.body);
  /* This HTML will be added inside the input tag */
  res.render(`validations/testValidation`, { layout: false });
});

module.exports = router;
