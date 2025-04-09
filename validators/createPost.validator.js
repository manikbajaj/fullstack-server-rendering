var { checkSchema } = require("express-validator");

const createPostValidator = checkSchema({
  title: {
    in: ["body"],
    notEmpty: true,
    errorMessage: "Title is required.",
    isString: true,
    trim: true,
  },
  content: {
    in: ["body"],
    optional: true,
    errorMessage: "Content cannot be empty.",
    isString: true,
    trim: true,
  },
  slug: {
    in: ["body"],
    notEmpty: true,
    errorMessage: "Slug is required and must be unique.",
    isSlug: {
      errorMessage: "Slug must be a valid URL slug.",
    },
    trim: true,
  },
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
  featuredImageUrl: {
    in: ["body"],
    optional: true,
    errorMessage: "Featured Image is required.",
    isURL: {
      options: {
        protocols: ["http", "https"],
        require_protocol: true,
        require_tld: false,
      },
      errorMessage: "Must be a valid URL.",
    },
    trim: true,
  },
  tags: {
    in: ["body"],
    optional: true,
    isArray: {
      errorMessage: "Tags must be an array of strings.",
    },
    custom: {
      options: (tags) =>
        Array.isArray(tags) && tags.every((tag) => typeof tag === "string"),
      errorMessage: "Each tag must be a string.",
    },
  },
});

module.exports = createPostValidator;
