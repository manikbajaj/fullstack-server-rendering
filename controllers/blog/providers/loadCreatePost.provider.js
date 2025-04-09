const prisma = require("../../../prisma/prismaClient.js");

async function loadCreatePostProvider(req, res) {
  const tags = await prisma.tag.findMany();
  console.log(tags);
  res.render("createPost", { tags });
}

module.exports = loadCreatePostProvider;
