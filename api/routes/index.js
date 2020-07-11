var express = require('express')
var router = express.Router()
var auth = require('./auth')
var business = require('./business')
var request = require('./request')
var tag = require('./tag')
var user = require('./user')
var isUserAuthenticated = require('../utils/isUserAuthenticated')

router.get('/', (req, res) => res.render('index', { title: 'Express' }))
router.get('/me', isUserAuthenticated, (req, res) => res.render('profile', { user: req.user }))

router.use('', auth)
router.use('', business)
router.use('', request)
router.use('', tag)
router.use('', user)

module.exports = router
