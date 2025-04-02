var express = require("express");
var router = express.Router();
var { validationResult, matchedData } = require("express-validator");
var emailValidator = require("../validators/formValidators/email.validator.js");

router.post("/email", emailValidator, function (req, res, next) {
  const result = validationResult(req);
  const validatedData = matchedData(req);

  console.log(req.body.email);

  if (!result.isEmpty()) {
    res.render(`validations/emailInValid`, {
      layout: false,
      value: req.body.email,
    });
    return;
  }

  res.render(`validations/emailValid`, {
    layout: false,
    value: validatedData.email,
  });
});

router.post("/password", function (req, res, next) {
  /* This HTML will be added inside the input tag */
  res.render(`validations/testValidation`, { layout: false });
});

module.exports = router;
