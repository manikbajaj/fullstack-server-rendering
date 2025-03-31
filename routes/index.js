var express = require("express");
var router = express.Router();
const fs = require("fs");
const path = require("path");
var requireAuth = require("../middleware/requireAuth.middleware.js");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express " });
});

/* GET home page. */
router.get("/create-post", requireAuth, function (req, res, next) {
  console.log(req.params);
  res.render("createPost");
});

module.exports = router;
