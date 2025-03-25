var express = require("express");
var router = express.Router();
const fs = require("fs");
const path = require("path");

/* GET home page. */
router.get("/", function (req, res, next) {
  // Set the path to the logs directory
  const logDir = path.join(__dirname, "..", "public", "logs");
  const timestamp = new Date().toISOString().replace(/:/g, "-"); // Replace colons to avoid issues in filenames
  const fileName = `file-${timestamp}.txt`;
  const filePath = path.join(logDir, fileName);

  // Ensure the directory exists
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
  }

  // Write a new file with the current timestamp
  fs.writeFile(filePath, `File created at ${timestamp}`, (err) => {
    if (err) {
      console.error("Error creating the file:", err);
      return res.status(500).send("Error creating the file.");
    }
  });

  res.render("index", { title: "Express " });
});

/* GET home page. */
router.get("/create-post", function (req, res, next) {
  console.log(req.params);
  res.render("createPost");
});

module.exports = router;
