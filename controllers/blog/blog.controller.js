const { createPostProvider } = require("./providers/createPost.provider.js");

async function handlePostBlog(req, res) {
  return await createPostProvider(req, res);
}

module.exports = { handlePostBlog };
