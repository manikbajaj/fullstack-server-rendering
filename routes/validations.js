var express = require("express");
var router = express.Router();
var emailValidator = require("../validators/formValidators/email.validator.js");
var emailValidationService = require("../services/validation/emailValidation.service.js");

router.post("/email", emailValidator, function (req, res, next) {
  return emailValidationService(req, res);
});

router.post("/password", function (req, res, next) {
  /* This HTML will be added inside the input tag */
  res.render(`validations/testValidation`, { layout: false });
});

module.exports = router;
