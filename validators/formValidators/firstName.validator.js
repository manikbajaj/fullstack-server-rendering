var { checkSchema } = require("express-validator");

const firstNameValidator = checkSchema({
  firstName: {
    in: ["body"],
    notEmpty: true,
    isString: true,
    trim: true,
  },
});

module.exports = firstNameValidator;
