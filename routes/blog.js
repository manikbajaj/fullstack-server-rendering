var express = require("express");
var router = express.Router();
var { validationResult } = require("express-validator");
var createPostValidator = require("../validators/createPost.validator.js");
const {
  handlePostBlog,
  handleGetPost,
} = require("../controllers/blog/blog.controller.js");
const getBlogPostValidator = require("../validators/getBlogPost.validator.js");

/* GET home page. */
router.get("/:blogId", getBlogPostValidator, async function (req, res, next) {
  const result = validationResult(req);
  return await handleGetPost(req, res);
});

router.post("/create", createPostValidator, async function (req, res, next) {
  const result = validationResult(req);
  handlePostBlog(req, res);
  console.log(result.array());
  res.render("blog");
});

module.exports = router;
