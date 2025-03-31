// prisma/seeds/userSeed.js
const prisma = require("../prismaClient.js");
const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");

async function seedUsers() {
  const numberOfUsers = 5;
  const password = "TestPass123#";

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);

  for (let i = 0; i < numberOfUsers; i++) {
    await prisma.user.create({
      data: {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: hashedPassword, //faker.internet.password()
      },
    });
  }
  console.log(`${numberOfUsers} users created.`);
}

module.exports = seedUsers;
