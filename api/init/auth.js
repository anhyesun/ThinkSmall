const GoogleStrategy = require('passport-google-oauth20').Strategy
const LocalStrategy = require('passport-local').Strategy
const passport = require('passport')
const path = require('path')
const session = require('express-session')
const User = require('../models/user')
const ObjectId = require('../controllers/helper')
const flash = require('connect-flash');

require('dotenv').config({ path: path.join(__dirname, '.env') })

const clientID = process.env.OAUTH_CLIENT_ID
const clientSecret = process.env.OAUTH_CLIENT_SECRET

module.exports = (app) => {
  app.use(session({
    cookie: { secure: false },
    resave: true,
    saveUninitialized: true,
    secret: 'anything',
  }))
  app.use(passport.initialize())
  app.use(passport.session())
  app.use(flash());

  // Used to stuff a piece of information into a cookie
  passport.serializeUser((user, done) => {
    done(null, user._id)
  })

  // Used to decode the received cookie and persist session
  passport.deserializeUser((id, done) => {
    User.findById(ObjectId(id)).then((user) => {
      done(null, user)
    })
  })

  passport.use('local-signup', new LocalStrategy({
    // by default, local strategy uses username and password, we will override with email
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true // allows us to pass back the entire request to the callback
  },
    function (req, email, password, done) {
      process.nextTick(function () {
        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        User.findOne({ email: req.body.email }, function (err, user) {
          // if there are any errors, return the error
          if (err)
            return done(err);

          // check to see if theres already a user with that email
          if (user) {
            return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
          } else {

            // if there is no user with that email
            // create the user
            var newUser = new User();

            // set the user's local credentials
            newUser.email = req.body.email
            newUser.password = newUser.generateHash(req.body.password)
            newUser.givenName = req.body.givenName
            newUser.familyName = req.body.familyName

            // save the user
            newUser.save(function (err) {
              if (err)
                throw err;
              return done(null, newUser)
            })
          }
        })
      })
    }))

  passport.use('local-login', new LocalStrategy({
    // by default, local strategy uses username and password, we will override with email
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true // allows us to pass back the entire request to the callback
  },
    function (req, email, password, done) { // callback with email and password from our form
      // find a user whose email is the same as the forms email
      // we are checking to see if the user trying to login already exists
      User.findOne({ email: req.body.email }, function (err, user) {
        // if there are any errors, return the error before anything else
        if (err)
          return done(err)

        // if no user is found, return the message
        if (!user)
          return done(null, false, req.flash('loginMessage', 'No user found.')) // req.flash is the way to set flashdata using connect-flash

        // if the user is found but the password is wrong
        if (!user.validPassword(req.body.password)) {
          return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')) // create the loginMessage and save it to session as flashdata
        }
        // all is well, return successful user
        return done(null, user)
      })
    }))

  // OAuth Strategy to get access_token
  passport.use(
    new GoogleStrategy(
      {
        clientID,
        clientSecret,
        callbackURL: '/auth/google/callback'
      },
      (accessToken, refreshToken, profile, done) => {
        const user = {
          givenName: profile.name.givenName,
          familyName: profile.name.familyName,
          email: profile.emails[0]?.value,
          imageUrl: profile.photos[0]?.value,
        }
        User.findOne({ email: user.email }).then((existingUser) => {
          if (existingUser) {
            return done(null, existingUser)
          } else {
            new User(user)
              .save()
              .then((newUser) => done(null, { ...newUser, accessToken, refreshToken }))
          }
        })
      }
    )
  )

  app.use(passport.initialize())
  app.use(passport.session())
}

