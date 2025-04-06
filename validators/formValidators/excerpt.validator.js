var { checkSchema } = require("express-validator");

const excerptValidator = checkSchema({
  excerpt: {
    in: ["body"],
    notEmpty: true,
    errorMessage: "Excerpt is required.",
    isString: true,
    trim: true,
    isLength: {
      options: { max: 255 },
      errorMessage: "Excerpt cannot be more than 255 characters long.",
    },
  },
});

module.exports = excerptValidator;
