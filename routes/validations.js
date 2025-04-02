var express = require("express");
var router = express.Router();

router.post("/email", function (req, res, next) {
  console.log(req.body);
  /* This HTML will be added inside the input tag */
  res.render(`validations/testValidation`, { layout: false });
});

router.post("/password", function (req, res, next) {
  console.log(req.body);
  /* This HTML will be added inside the input tag */
  res.render(`validations/testValidation`, { layout: false });
});

module.exports = router;
