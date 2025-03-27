var { checkSchema } = require("express-validator");

const signupValidator = checkSchema({
  firstName: {
    in: ["body"],
    notEmpty: true,
    isString: true,
    trim: true,
  },
  lastName: {
    in: ["body"],
    notEmpty: false,
    isString: true,
    trim: true,
  },
  email: {
    in: ["body"],
    notEmpty: true,
    /* all options can be checked in validators.d.ts file in chain directory of express validator package */
    isEmail: {
      options: {
        allow_underscores: true,
      },
    },
    trim: true,
  },
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

module.exports = signupValidator;
