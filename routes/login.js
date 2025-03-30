var express = require("express");
var router = express.Router();
var prisma = require("../prisma/prismaClient.js");
var { validationResult } = require("express-validator");
var loginValidator = require("../validators/login.validator.js");
var { handlePostLogin } = require("../controllers/login/login.controller.js");

/* GET home page. */
router.get("/", async function (req, res, next) {
  res.render("login");
});

/* GET home page. */
router.post("/", loginValidator, async function (req, res, next) {
  const result = validationResult(req);
  await handlePostLogin(req, res);
  console.log(result.array());
  res.render("login");
});

module.exports = router;
