// prisma/seeds/tagSeed.js
const prisma = require("../prismaClient.js");

async function seedTags() {
  const numberOfTags = 10; // This should match or be less than the length of travelTags
  const posts = await prisma.post.findMany();
  const travelTags = [
    "Adventure",
    "Beaches",
    "Cultural",
    "Eco Tourism",
    "Festivals",
    "Food and Drink",
    "Hiking",
    "Historical Sites",
    "Luxury",
    "Wildlife",
  ];

  for (let i = 0; i < numberOfTags; i++) {
    const tag = travelTags[i % travelTags.length];
    const tagEntry = await prisma.tag.create({
      data: {
        name: tag,
        slug: tag.toLowerCase().replace(/\s+/g, "-"), // Create a slug from the tag name
      },
    });

    // Randomly assign this tag to some posts
    for (let post of posts) {
      if (Math.random() > 0.3) {
        // 50% chance to link tag with a post
        await prisma.post.update({
          where: { id: post.id },
          data: {
            tags: {
              connect: { id: tagEntry.id },
            },
          },
        });
      }
    }
  }
  console.log(`${numberOfTags} tags created and associated.`);
}

module.exports = seedTags;
