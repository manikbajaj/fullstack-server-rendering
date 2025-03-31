// prisma/seed.js
const seedUsers = require("./seeds/users.seed.js");
const seedPosts = require("./seeds/posts.seed.js");
const seedTags = require("./seeds/tags.seed.js");

async function seed() {
  console.log("Starting database seeding...");
  await seedUsers();
  await seedPosts();
  await seedTags();
  console.log("Database seeding completed.");
}

seed().catch((e) => {
  console.error(e);
  process.exit(1);
});
