function extractUserDetails(req, res) {
  if (!req.session.isLoggedIn) {
    return {};
  }

  return {
    isLoggedIn: req.session.isLoggedIn,
    firstName: req.session.firstName,
  };
}

module.exports = extractUserDetails;
