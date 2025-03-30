const { matchedData } = require("express-validator");

async function createUserProvider(req, res) {
  const validatedData = matchedData(req);
  console.log(validatedData);
}

module.exports = { createUserProvider };
