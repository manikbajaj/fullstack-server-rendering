var { createUserProvider } = require("./providers/createUser.provider.js");

async function handlePostSignup(req, res) {
  return await createUserProvider(req, res);
}

module.exports = { handlePostSignup };
