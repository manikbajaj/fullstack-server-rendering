// prisma/seeds/postSeed.js
const prisma = require("../prismaClient.js");
const { faker } = require("@faker-js/faker");

async function seedPosts() {
  const numberOfPosts = 30;
  const users = await prisma.user.findMany();
  const totalImages = 10; // Total images available

  for (let i = 0; i < numberOfPosts; i++) {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    const imageIndex = (i % totalImages) + 1; // Image index cycles from 1 to 10

    await prisma.post.create({
      data: {
        title: faker.lorem.sentence(),
        content: faker.lorem.paragraphs(3),
        slug: faker.lorem.slug(),
        excerpt: faker.lorem.sentences(2),
        featuredImageUrl: `/images/camping-${imageIndex}.jpg`,
        // faker.image.imageUrl(),
        authorId: randomUser.id,
      },
    });
  }

  console.log(`${numberOfPosts} posts created.`);
}

module.exports = seedPosts;
