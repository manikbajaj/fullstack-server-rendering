var { validationResult, matchedData } = require("express-validator");

function excerptValidationService(req, res) {
  const result = validationResult(req);
  const validatedData = matchedData(req);

  /* logic */
}

module.exports = excerptValidationService;
