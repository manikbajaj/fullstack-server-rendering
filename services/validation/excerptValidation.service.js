var { validationResult, matchedData } = require("express-validator");

function excerptValidationService(req, res) {
  const result = validationResult(req);
  const validatedData = matchedData(req);

  if (!result.isEmpty()) {
    res.render(`validations/excerptInvalid`, {
      layout: false,
      value: req.body.excerpt,
    });
    return;
  }

  res.render(`validations/excerptValid`, {
    layout: false,
    value: validatedData.excerpt,
  });
}

module.exports = excerptValidationService;
