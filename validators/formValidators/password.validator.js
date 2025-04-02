var { checkSchema } = require("express-validator");

const passwordValidator = checkSchema({
  password: {
    in: ["body"],
    notEmpty: true,
    isStrongPassword: {
      options: {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      },
      errorMessage:
        "The password must be of 8 chars, with atleas 1 uppercase and 1 lowercase char, 1 number and 1 symbol.",
    },
  },
});

module.exports = passwordValidator;
