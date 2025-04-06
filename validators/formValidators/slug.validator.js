var { checkSchema } = require("express-validator");

const slugValidator = checkSchema({
  slug: {
    in: ["body"],
    notEmpty: true,
    errorMessage: "Slug is required and must be unique.",
    isSlug: {
      errorMessage: "Slug must be a valid URL slug.",
    },
    trim: true,
  },
});

module.exports = slugValidator;
