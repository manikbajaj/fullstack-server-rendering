var { checkSchema } = require("express-validator");

const emailValidator = checkSchema({
  email: {
    in: ["body"],
    notEmpty: true,
    isEmail: true,
  },
});

module.exports = emailValidator;
