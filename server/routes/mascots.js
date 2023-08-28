const express = require('express')
const router = express.Router()
const mascotsCtrlr = require('../controllers/mascots')

// GET /api/mascots
router.get('/', mascotsCtrlr.indexMascots)
// GET /api/mascots/:id
router.get('/:id', mascotsCtrlr.findMascotById)

module.exports = router
