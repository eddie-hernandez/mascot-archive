const express = require('express')
const router = express.Router()
const configureUpload = require('../config/aws.js')
const subCtrlr = require('../controllers/submissions')
// const { validationResult } = require('express-validator')
// const verifyToken = require('../config/verifyToken')

// Handling form submissions
// POST /api/submit
router.post('/', configureUpload.single('photo'), subCtrlr.postSubmission)

module.exports = router;