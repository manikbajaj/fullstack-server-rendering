const { matchedData } = require("express-validator");
const bcrypt = require("bcrypt");
const prisma = require("../../../prisma/prismaClient.js");

async function loginUserProvider(req, res) {
  const validatedData = matchedData(req);
  console.log(validatedData);

  const user = await prisma.user.findUnique({
    where: {
      email: validatedData.email,
    },
  });

  // Compare password to hash
  const result = await bcrypt.compare(validatedData.password, user.password);

  if (result) {
    req.session.isLoggedIn = true;
    req.session.firstName = user.firstName;
  }

  console.log(user);
  console.log(result);

  return user;
}

module.exports = { loginUserProvider };
