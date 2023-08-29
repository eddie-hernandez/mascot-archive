const express = require('express')
const router = express.Router()
const adminCtrlr = require('../controllers/admins')
const ensureLoggedIn = require('../config/ensureLoggedIn')


// make sure admin has token!
// GET /api/admin/verify-token
router.get('/verify-token', ensureLoggedIn, adminCtrlr.verifyToken)

// wake server!
router.put('/wake', (req, res, next) => {
  res.sendStatus(204)
})

// POST /api/admin
router.post('/', adminCtrlr.create)

// POST /api/admin/login
router.post('/login', adminCtrlr.login)

// fetch pending submissions
// GET /api/admin/submissions/pending
router.get('/submissions/pending', adminCtrlr.fetchPendingSubs)
// GET /api/admin/submissions/approved
router.get('/submissions/approved', adminCtrlr.fetchApprovedSubs)
// GET /api/admin/submissions/denied
router.get('/submissions/denied', adminCtrlr.fetchDeniedSubs)

// update submission status (approve or deny)
// POST /api/admin/submissions/:id
router.post('/submissions/:id', adminCtrlr.sortSubs)

module.exports = router