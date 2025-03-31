// prisma/cleanup.js
const prisma = require("./prismaClient.js");

async function cleanDatabase() {
  console.log("Cleaning database...");

  // Assuming there's an implicit or explicit through table for many-to-many relationship,
  // you need to handle it according to Prisma's version and your schema setup.

  // Delete any many-to-many relations if stored in a junction table (if explicitly defined)
  // This step is necessary if you have an explicit join table you manage yourself
  // Example (uncomment if applicable):
  // await prisma.postTags.deleteMany();
  // console.log("Post-Tag relations deleted");

  // Delete posts (automatically handles deletion from the implicit junction table)
  await prisma.post.deleteMany();
  console.log("Posts deleted");

  // Delete tags
  await prisma.tag.deleteMany();
  console.log("Tags deleted");

  // Finally, delete users
  await prisma.user.deleteMany();
  console.log("Users deleted");

  console.log("Database cleaned");
}

module.exports = cleanDatabase;
