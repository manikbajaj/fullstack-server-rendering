const { matchedData } = require("express-validator");
const sanitizeHtml = require("sanitize-html");
const prisma = require("../../../prisma/prismaClient.js");

async function createPostProvider(req, res) {
  // get validated data
  const validatedData = matchedData(req);

  // sanitize HTML
  const cleanContent = sanitizeHtml(validatedData.content);

  const tags = validatedData.tags.map((each) => {
    return { slug: each };
  });

  try {
    const post = await prisma.post.create({
      data: {
        title: validatedData.title,
        slug: validatedData.slug,
        content: cleanContent,
        excerpt: validatedData.excerpt,
        featuredImageUrl: validatedData.featuredImageUrl,
        tags: {
          connect: tags,
        },
        author: {
          connect: { id: req.session.userId },
        },
      },
    });
  } catch (error) {
    console.log(error);
  }

  console.log(post);

  // return created post
}

module.exports = { createPostProvider };
