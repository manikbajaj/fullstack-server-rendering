var { validationResult, matchedData } = require("express-validator");

function passwordValidationService(req, res) {
  const result = validationResult(req);
  const validatedData = matchedData(req);

  if (!result.isEmpty()) {
    res.render(`validations/passwordInvalid`, {
      layout: false,
      value: req.body.password,
    });
    return;
  }

  res.render(`validations/passwordValid`, {
    layout: false,
    value: validatedData.password,
  });
}

module.exports = passwordValidationService;
