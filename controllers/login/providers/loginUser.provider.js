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
    req.session.id = user.id;
    req.session.firstName = user.firstName;
    req.session.lastName = user.lastName;
    req.session.email = user.email;
  }

  res.set("HX-Redirect", "/create-post");

  return res.render("createPost", {
    user: { ...user, isLoggedIn: true },
  });
}

module.exports = { loginUserProvider };
