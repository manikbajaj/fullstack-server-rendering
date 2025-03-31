function requireAuth(req, res, next) {
  // Check if the session and isLoggedIn flag exist
  if (req.session && req.session.isLoggedIn) {
    // Proceed to the next middleware or route handler
    next();
  } else {
    // Redirect to login page or send an error message
    res.status(401).send("You must be logged in to access this page");
  }
}

module.exports = requireAuth;
