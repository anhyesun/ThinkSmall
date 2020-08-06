module.exports = (req, res, next) => {
  // NOTE: if using jwt, you'd verify the token here.

  // if req.user is logged in, we are good, otherwise we must redirect to loging screen.
  // else if needs to be clear, the user type must be distinguished somehow
  // req.user is the session data. Is there any type of info unique to google
  if (req.user) {
    next();
  } else {
    res.redirect('/');
  }
};
