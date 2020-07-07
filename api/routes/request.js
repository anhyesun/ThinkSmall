const express = require('express')

const RequestCtrl = require('../controllers/request')

const router = express.Router()

router.post('/request', RequestCtrl.createRequest)
router.put('/request/:id', RequestCtrl.updateRequest)
router.delete('/request/:id', RequestCtrl.deleteRequest)
router.get('/request/:id', RequestCtrl.getRequestById)
router.get('/requests', RequestCtrl.getRequests)

module.exports = router
