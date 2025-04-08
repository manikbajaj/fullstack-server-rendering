var { validationResult, matchedData } = require("express-validator");

function slugValidationService(req, res) {
  const result = validationResult(req);
  const validatedData = matchedData(req);

  if (!result.isEmpty()) {
    res.render(`validations/slugInvalid`, {
      layout: false,
      value: req.body.slug,
    });
    return;
  }

  res.render(`validations/slugValid`, {
    layout: false,
    value: validatedData.slug,
  });
}

module.exports = slugValidationService;
