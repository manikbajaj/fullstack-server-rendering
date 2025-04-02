var express = require("express");
var router = express.Router();
var emailValidator = require("../validators/formValidators/email.validator.js");
var passwordValidator = require("../validators/formValidators/password.validator.js");
var firstNameValidator = require("../validators/formValidators/firstName.validator.js");
var emailValidationService = require("../services/validation/emailValidation.service.js");
var passwordValidationService = require("../services/validation/passwordValidation.service.js");
var firstNameValidationService = require("../services/validation/firstNameValidation.service.js");

router.post("/email", emailValidator, function (req, res, next) {
  return emailValidationService(req, res);
});

router.post("/password", passwordValidator, function (req, res, next) {
  return passwordValidationService(req, res);
});

router.post("/firstName", firstNameValidator, function (req, res, next) {
  return firstNameValidationService(req, res);
});

module.exports = router;
