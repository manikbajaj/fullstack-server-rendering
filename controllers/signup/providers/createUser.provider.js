const { matchedData } = require("express-validator");
const bcrypt = require("bcrypt");
const prisma = require("../../../prisma/prismaClient.js");

async function createUserProvider(req, res) {
  const validatedData = matchedData(req);
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(validatedData.password, salt);

  const newUser = await prisma.user.create({
    data: { ...validatedData, password: hashedPassword },
  });

  console.log(newUser);
}

module.exports = { createUserProvider };
