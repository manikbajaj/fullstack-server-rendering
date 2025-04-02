const prisma = require("../../../prisma/prismaClient.js");
const { matchedData } = require("express-validator");

async function getSinglePostProvider(req, res) {
  // get validated data
  const validatedData = matchedData(req);
  const post = await prisma.post.findFirst({
    where: {
      id: validatedData.blogId,
    },
    include: {
      author: true, // includes details about the author
      tags: true, // includes all tags related to each post
    },
  });

  console.log(post);

  return res.render("blog");
}

module.exports = getSinglePostProvider;
