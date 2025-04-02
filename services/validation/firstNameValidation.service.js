var { validationResult, matchedData } = require("express-validator");

function firstNameValidationService(req, res) {
  const result = validationResult(req);
  const validatedData = matchedData(req);

  if (!result.isEmpty()) {
    res.render(`validations/firstNameInvalid`, {
      layout: false,
      value: req.body.firstName,
    });
    return;
  }

  res.render(`validations/firstNameValid`, {
    layout: false,
    value: validatedData.firstName,
  });
}

module.exports = firstNameValidationService;
