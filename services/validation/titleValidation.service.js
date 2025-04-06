var { validationResult, matchedData } = require("express-validator");

function titleValidationService(req, res) {
  const result = validationResult(req);
  const validatedData = matchedData(req);

  /* logic */
}

module.exports = titleValidationService;
