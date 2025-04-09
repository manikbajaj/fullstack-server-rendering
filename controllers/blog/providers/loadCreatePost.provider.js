const prisma = require("../../../prisma/prismaClient.js");

async function loadCreatePostProvider(req, res) {
  const tags = await prisma.tag.findMany();
  return res.render("createPost", { tags });
}

module.exports = loadCreatePostProvider;
