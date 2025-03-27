var express = require("express");
var router = express.Router();
var { validationResult } = require("express-validator");
var createPostValidator = require("../validators/createPost.validator.js");

/* GET home page. */
router.get("/:blogId", function (req, res, next) {
  console.log(req.params);
  res.render("blog");
});

router.post("/create", createPostValidator, async function (req, res, next) {
  const result = validationResult(req);
  console.log(req.body);
  console.log(result.array());
  res.render("blog");
});

module.exports = router;
