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

/* GET home page. */
router.get("/signout", requireAuth, function (req, res, next) {
  req.session.destroy((err) => {
    if (err) {
      return res.send("Unable to signout please contact admin");
    }

    // Optionally clear the client-side cookie if it's set
    res.clearCookie("connect.sid"); // 'connect.sid' is the default session cookie name, change if different

    // Redirect to homepage or login page after logout
    res.redirect("/");
  });
});

module.exports = router;
