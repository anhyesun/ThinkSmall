const express = require('express')

const TagCtrl = require('../controllers/tag')

const router = express.Router()

router.post('/tag', TagCtrl.createTag)
router.put('/tag/:id', TagCtrl.updateTag)
router.delete('/tag/:id', TagCtrl.deleteTag)
router.get('/tag/:id', TagCtrl.getTagById)
router.get('/tags', TagCtrl.getTags)

module.exports = router
