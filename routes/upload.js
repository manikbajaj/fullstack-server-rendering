var express = require("express");
var router = express.Router();
var handleFileUpload = require("../controllers/upload/upload.controller.js");
const multer = require("multer");
var path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    const destPath = path.join(__dirname, "../public/images");
    callback(null, destPath);
  },
  /* By using file.fieldname, you are setting the saved filename to be the same as the name attribute of the input field from the form.  */
  filename: function (req, file, callback) {
    const newFilename = Date.now() + "-" + file.originalname;
    callback(null, newFilename);
  },
});

var upload = multer({ storage: storage });

router.post(
  "/",
  upload.single("featuredImage"),
  async function (req, res, next) {
    try {
      return await handleFileUpload(req, res);
    } catch (err) {
      console.error("Error in handleFileUpload:", err);
      res.status(500).send("Error processing file upload");
    }
  }
);

module.exports = router;
