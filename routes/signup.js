var express = require("express");
var router = express.Router();
var { validationResult } = require("express-validator");
var signupValidator = require("../validators/signup.validators.js");
const {
  handlePostSignup,
} = require("../controllers/signup/signup.controller.js");
var loadErrorPage = require("../utils/loadErrorPage.utils.js");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("signup");
});

/* GET home page. */
router.post("/", signupValidator, async function (req, res, next) {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return loadErrorPage(req, res, result);
  }
  return await handlePostSignup(req, res);
});

module.exports = router;
