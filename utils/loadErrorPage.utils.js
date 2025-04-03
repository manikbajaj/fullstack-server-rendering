const { StatusCodes } = require("http-status-codes");

function loadErrorPage(req, res, result) {
  req.session.errors = JSON.stringify(result.array());
  res.set("HX-Redirect", "/error");
  return res.status(StatusCodes.BAD_REQUEST).send({ error: result.array() });
}

module.exports = loadErrorPage;
