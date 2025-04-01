const { matchedData } = require("express-validator");
const prisma = require("../../../prisma/prismaClient.js");
const createPagination = require("../../../utils/createPagination.utils.js");

async function getAllPostsProvider(req, res) {
  const validatedData = matchedData(req);
  const limit = validatedData.limit ?? 10;
  const page = validatedData.page ?? 1;
  const tag = validatedData.tag;

  console.log(tag);

  const posts = await prisma.post.findMany({
    skip: (page - 1) * limit,
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

  const pagination = createPagination(
    totalPosts,
    "/",
    limit,
    page,
    tag ? `tag=${tag}` : undefined
  );

  return res.render("index", {
    posts,
    pagination: pagination,
  });
}

module.exports = getAllPostsProvider;
