var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/:blogId", function (req, res, next) {
  console.log(req.params);
  res.render("blog");
});

module.exports = router;
