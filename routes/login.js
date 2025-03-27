var express = require("express");
var router = express.Router();
var prisma = require("../prisma/prismaClient.js");

/* GET home page. */
router.get("/", async function (req, res, next) {
  res.render("login");
});

module.exports = router;
