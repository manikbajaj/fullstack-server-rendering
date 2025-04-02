var express = require("express");
var router = express.Router();
var prisma = require("../prisma/prismaClient.js");
var { validationResult } = require("express-validator");
var loginValidator = require("../validators/login.validator.js");
var { handlePostLogin } = require("../controllers/login/login.controller.js");

router.get("/", async function (req, res, next) {
  res.render("login");
});

router.post("/", loginValidator, async function (req, res, next) {
  const result = validationResult(req);
  console.log(result.array());
  return await handlePostLogin(req, res);
});

module.exports = router;
