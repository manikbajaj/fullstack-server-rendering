var { validationResult, matchedData } = require("express-validator");

function slugValidationService(req, res) {
  const result = validationResult(req);
  const validatedData = matchedData(req);

  /* logic */
}

module.exports = slugValidationService;
