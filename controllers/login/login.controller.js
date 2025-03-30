var { loginUserProvider } = require("./providers/loginUser.provider.js");

async function handlePostLogin(req, res) {
  return await loginUserProvider(req, res);
}

module.exports = { handlePostLogin };
