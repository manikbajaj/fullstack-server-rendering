var { validationResult, matchedData } = require("express-validator");

function emailValidationService(req, res) {
  const result = validationResult(req);
  const validatedData = matchedData(req);

  if (!result.isEmpty()) {
    res.render(`validations/emailInValid`, {
      layout: false,
      value: req.body.email,
    });
    return;
  }

  res.render(`validations/emailValid`, {
    layout: false,
    value: validatedData.email,
  });
}

module.exports = emailValidationService;
