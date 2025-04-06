var express = require("express");
var router = express.Router();
var emailValidator = require("../validators/formValidators/email.validator.js");
var passwordValidator = require("../validators/formValidators/password.validator.js");
var firstNameValidator = require("../validators/formValidators/firstName.validator.js");
var emailValidationService = require("../services/validation/emailValidation.service.js");
var passwordValidationService = require("../services/validation/passwordValidation.service.js");
var firstNameValidationService = require("../services/validation/firstNameValidation.service.js");
var titleValidator = require("../validators/formValidators/title.validator");
var slugValidator = require("../validators/formValidators/slug.validator.js");
var excerptValidator = require("../validators/formValidators/excerpt.validator.js");
var titleValidationService = require("../services/validation/titleValidation.service.js");
var excerptValidationService = require("../services/validation/excerptValidation.service.js");
var slugValidationService = require("../services/validation/slugValidation.service.js");

router.post("/email", emailValidator, function (req, res, next) {
  return emailValidationService(req, res);
});

router.post("/password", passwordValidator, function (req, res, next) {
  return passwordValidationService(req, res);
});

router.post("/firstName", firstNameValidator, function (req, res, next) {
  return firstNameValidationService(req, res);
});

router.post("/title", titleValidator, function (req, res, next) {
  return titleValidationService(req, res);
});

router.post("/excerpt", excerptValidator, function (req, res, next) {
  return excerptValidationService(req, res);
});

router.post("/slug", slugValidator, function (req, res, next) {
  return slugValidationService(req, res);
});

module.exports = router;
