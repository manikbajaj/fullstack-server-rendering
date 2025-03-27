var express = require("express");
var router = express.Router();
var { validationResult } = require("express-validator");
var signupValidator = require("../validators/signup.validators.js");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("signup");
});

/* GET home page. */
router.post("/", signupValidator, async function (req, res, next) {
  const result = validationResult(req);
  console.log(req.body);
  console.log(result.array());

  res.render("signup");
});

module.exports = router;
