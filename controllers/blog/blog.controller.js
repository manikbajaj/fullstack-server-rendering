const { createPostProvider } = require("./providers/createPost.provider.js");
const getAllPostsProvider = require("./providers/getAllPosts.provider.js");

async function handlePostBlog(req, res) {
  return await createPostProvider(req, res);
}

async function handleGetBlogs(req, res) {
  return await getAllPostsProvider(req, res);
}

module.exports = { handlePostBlog, handleGetBlogs };
