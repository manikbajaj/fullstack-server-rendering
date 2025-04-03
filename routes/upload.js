var express = require("express");
var router = express.Router();
var handleFileUpload = require("../controllers/upload/upload.controller.js");

router.post("/", async function (req, res, next) {
  return await handleFileUpload(req, res);
});

module.exports = router;
