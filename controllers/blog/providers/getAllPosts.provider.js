const { matchedData } = require("express-validator");
const prisma = require("../../../prisma/prismaClient.js");
const util = require("util");

async function getAllPostsProvider(req, res) {
  const validatedData = matchedData(req);
  const limit = validatedData.limit ?? 10;
  const page = validatedData.page ?? 1;
  const tag = validatedData.tag;

  const posts = await prisma.post.findMany({
    skip: page * limit,
    take: limit,
    where: {
      tags: {
        some: {
          slug: tag,
        },
      },
    },
    include: {
      author: true, // includes details about the author
      tags: true, // includes all tags related to each post
    },
  });

  const totalPosts = await prisma.post.count({
    where: {
      tags: {
        some: {
          slug: tag,
        },
      },
    },
  });

  console.log(posts);
  const totalPages = Math.ceil(totalPosts / limit);

  return res.render("index", {
    posts,
    currentPage: page,
    limit,
    totalPages,
    tag,
  });
}

module.exports = getAllPostsProvider;
