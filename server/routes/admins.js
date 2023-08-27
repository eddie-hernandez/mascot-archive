const express = require('express')
const router = express.Router()
const adminCtrlr = require('../controllers/admins')
const ensureLoggedIn = require('../config/ensureLoggedIn')


// make sure admin has token!
// GET /api/users/check-token
router.get('/verify-token', ensureLoggedIn, adminCtrlr.verifyToken)

// wake server!
router.put('/wake', (req, res, next) => {
  res.sendStatus(204)
})

// POST /api/admin/login
router.post('/login', adminCtrlr.login)


// fetch pending submissions
// GET /api/admin/submissions/pending
router.get('/submissions/pending', adminCtrlr.fetchPendingSubs)

// update submission status (approve or deny)
// POST /api/admin/submissions/:id
router.post('/submissions/:id', adminCtrlr.sortSubs)

module.exports = router