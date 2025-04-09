const { matchedData } = require("express-validator");
const sanitizeHtml = require("sanitize-html");
const prisma = require("../../../prisma/prismaClient.js");
const { StatusCodes } = require("http-status-codes");

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

    res.set("HX-Redirect", "/create-post?success=true");
    return res.send("OK");
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send("Failed to create post: " + error.message);
  }
}

module.exports = { createPostProvider };
