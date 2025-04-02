var { checkSchema } = require("express-validator");

const getBlogPostValidator = checkSchema({
  blogId: {
    in: ["params"],
    notEmpty: true,
    isInt: true,
    toInt: true,
  },
});

module.exports = getBlogPostValidator;
