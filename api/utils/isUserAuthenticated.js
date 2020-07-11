module.exports = (req, res, next) => {
  // NOTE: if using jwt, you'd verify the token here.
  if (req.user) {
    next();
  } else {
    res.redirect('/auth/google');
  }
};
