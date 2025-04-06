var { checkSchema } = require("express-validator");

const titleValidator = checkSchema({
  title: {
    in: ["body"],
    notEmpty: true,
    errorMessage: "Title is required.",
    isString: true,
    trim: true,
  },
});

module.exports = titleValidator;
