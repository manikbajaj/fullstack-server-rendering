var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express " });
});

/* GET home page. */
router.get("/create-post", function (req, res, next) {
  console.log(req.params);
  res.render("createPost");
});

module.exports = router;
