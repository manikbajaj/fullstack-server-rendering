const { matchedData } = require("express-validator");
const sanitizeHtml = require("sanitize-html");
const prisma = require("../../../prisma/prismaClient.js");

async function createPostProvider(req, res) {
  // get validated data
  const validatedData = matchedData(req);

  // sanitize HTML
  const cleanContent = sanitizeHtml(validatedData.content);

  console.log(validatedData);
  console.log(cleanContent);

  // return created post
}

module.exports = { createPostProvider };
