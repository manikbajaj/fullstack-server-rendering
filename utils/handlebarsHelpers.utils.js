const hbs = require("hbs");
const { format } = require("date-fns");

// Register helpers
hbs.registerHelper("formatDate", function (date) {
  return format(new Date(date), "d MMMM, yyyy");
});

// Register more helpers as needed

module.exports = hbs;
