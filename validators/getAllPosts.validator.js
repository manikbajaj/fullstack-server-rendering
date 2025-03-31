var { checkSchema } = require("express-validator");

const getAllPostsValidator = checkSchema({
  limit: {
    in: ["query"],
    optional: true,
    isInt: true,
    toInt: true,
  },
  page: {
    in: ["query"],
    optional: true,
    isInt: true,
    toInt: true,
    default: 1,
  },
  tag: {
    in: ["query"],
    isString: true,
    optional: true,
    trim: true,
  },
});

module.exports = getAllPostsValidator;
