function addUserToViews(req, res, next) {
  // Attach user data to res.locals which is accessible in views
  if (req.session) {
    res.locals.user = {
      isLoggedIn: req.session.isLoggedIn,
      firstName: req.session.firstName,
      lastName: req.session.lastName,
      email: req.session.email,
      id: req.session.id,
    };
  } else {
    // Ensure user object is always present even if session is not started
    res.locals.user = {
      isLoggedIn: false,
      firstName: undefined,
    };
  }
  next();
}

module.exports = addUserToViews;
