var express = require("express");
var router = express.Router();
var { validationResult } = require("express-validator");
var createPostValidator = require("../validators/createPost.validator.js");
const { handlePostBlog } = require("../controllers/blog/blog.controller.js");
var extractUserDetails = require("../utils/extractUserDetails.utils.js");

/* GET home page. */
router.get("/:blogId", function (req, res, next) {
  console.log(req.params);
  res.render("blog", { user: extractUserDetails(req, res) });
});

router.post("/create", createPostValidator, async function (req, res, next) {
  const result = validationResult(req);
  handlePostBlog(req, res);
  console.log(result.array());
  res.render("blog");
});

module.exports = router;
