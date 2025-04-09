const { createPostProvider } = require("./providers/createPost.provider.js");
const getAllPostsProvider = require("./providers/getAllPosts.provider.js");
const getSinglePostProvider = require("./providers/getSinglePost.provider.js");
const loadCreatePostProvider = require("./providers/loadCreatePost.provider.js");

async function handlePostBlog(req, res) {
  return await createPostProvider(req, res);
}

async function handleGetBlogs(req, res) {
  return await getAllPostsProvider(req, res);
}

async function handleGetPost(req, res) {
  return await getSinglePostProvider(req, res);
}

async function handleGetCreatePost(req, res) {
  return await loadCreatePostProvider(req, res);
}

module.exports = {
  handlePostBlog,
  handleGetBlogs,
  handleGetPost,
  handleGetCreatePost,
};
