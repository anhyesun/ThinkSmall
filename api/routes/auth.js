const express = require('express')
const passport = require('passport')

const router = express.Router()
const scope = ['email', 'profile']

// Oauth Routes
router.get('/auth/google',
  passport.authenticate('google', { scope })
)
router.get('/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/auth/google',
    successRedirect: '/',
  })
)

// local passport routes
router.post('/register', passport.authenticate('local-signup', {
  successRedirect: '/',
  failureRedirect: '/'
})
)

router.post('/login', passport.authenticate('local-login', {
  successRedirect: '/',
  failureRedirect: '/',
  failureFlash: true
}))

module.exports = router
