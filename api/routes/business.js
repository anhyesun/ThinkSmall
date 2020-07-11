const express = require('express')

const BusinessCtrl = require('../controllers/business')

const router = express.Router()

router.post('/business', BusinessCtrl.createBusiness)
router.put('/business/:id', BusinessCtrl.updateBusiness)
router.delete('/business/:id', BusinessCtrl.deleteBusiness)
router.get('/business/:id', BusinessCtrl.getBusinessById)
router.get('/businesses', BusinessCtrl.getBusinesses)

module.exports = router
