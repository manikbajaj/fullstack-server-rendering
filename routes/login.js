var express = require("express");
var router = express.Router();
var prisma = require("../prisma/prismaClient.js");

/* GET home page. */
router.get("/", async function (req, res, next) {
  try {
    const user = await prisma.user.create({
      data: {
        firstName: "John", // Required field
        email: "john@example.com", // Required and must be unique
      },
    });
  } catch (error) {
    console.error("Error creating user:", error);
    // Handle specific errors like unique constraint violation etc.
    throw error;
  }

  res.render("login");
});

module.exports = router;
