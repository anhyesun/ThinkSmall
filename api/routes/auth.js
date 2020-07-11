const express = require('express')
const passport = require('passport')

const router = express.Router()
const scope = ['email', 'profile']

router.get('/auth/google',
  passport.authenticate('google', { scope })
)
router.get('/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/auth/google',
    successRedirect: '/',
  })
)

module.exports = router
