const express = require('express')
const router = express.Router()
const mascotsCtrlr = require('../controllers/mascots')

// GET /api/mascots
router.get('/', mascotsCtrlr.indexApprovedMascots)
// GET /api/mascots/random
router.get('/random', mascotsCtrlr.getRandomMascot);
// GET /api/mascots/:id
router.get('/:id', mascotsCtrlr.findMascotById)
// GET /api/mascots/types/:type
router.get('/types/:type', mascotsCtrlr.indexMascotsByType)

module.exports = router
