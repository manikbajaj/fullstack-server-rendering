var express = require("express");
var router = express.Router();
var { validationResult } = require("express-validator");
var loginValidator = require("../validators/login.validator.js");
var { handlePostLogin } = require("../controllers/login/login.controller.js");

router.get("/", async function (req, res, next) {
  res.render("login", { signupSuccess: req.query.signupSuccess });
});

router.post("/", loginValidator, async function (req, res, next) {
  const result = validationResult(req);
  return await handlePostLogin(req, res);
});

module.exports = router;
