const { matchedData } = require("express-validator");

async function getAllPostsProvider(req, res) {
  const validatedData = matchedData(req);
  console.log(validatedData);
  return res.render("index");
}

module.exports = getAllPostsProvider;
