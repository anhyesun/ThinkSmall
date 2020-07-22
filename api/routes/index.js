var express = require('express')
var router = express.Router()
var path = require('path')
var auth = require('./auth')
var business = require('./business')
var request = require('./request')
var tag = require('./tag')
var user = require('./user')
var isUserAuthenticated = require('../utils/isUserAuthenticated')

router.get('/', (req, res) => res.render('index', { title: 'Express' }))
router.get('/me', (req, res) => res.status(200).json({ _id: req.user?._id }))
router.get('/account', isUserAuthenticated, (req, res) => res.sendFile(path.join(__dirname, '../../client/build/index.html')))

router.use('', auth)
router.use('', business)
router.use('', request)
router.use('', tag)
router.use('', user)

module.exports = router
