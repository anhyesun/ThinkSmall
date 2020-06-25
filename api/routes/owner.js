const express = require('express')

const OwnerCtrl = require('../controllers/owner')

const router = express.Router()

router.post('/owner', OwnerCtrl.createOwner)
router.put('/owner/:id', OwnerCtrl.updateOwner)
router.delete('/owner/:id', OwnerCtrl.deleteOwner)
router.get('/owner/:id', OwnerCtrl.getOwnerById)
router.get('/owners', OwnerCtrl.getOwners)

module.exports = router
