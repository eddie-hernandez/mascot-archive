const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const Admin = require('../models/admin')
const Submission = require('../models/submission')


function createJWT(admin) {
  return jwt.sign(
    // data payload
    { admin },
    process.env.SECRET,
    { expiresIn: '24h' }
  )
}

function verifyToken(req, res) {
  res.json(req.exp)
}

async function create(req, res) {
  try {
    // Add the user to the db
    const adminExist = await Admin.findOne({
      username: req.body.username,
    }).exec()
    if (adminExist) {
      res.sendStatus(409)
      return
    }
    const admin = await Admin.create(req.body)
    // token will be a string
    const token = createJWT(admin)
    // Yes, we can serialize a string
    res.json(token)
  } catch (err) {
    // Probably a dup username
    res.status(400).json(err)
  }
}

async function login(req, res) {
  try {
    // Find the admin by their email address
    const admin = await Admin.findOne({ username: req.body.username })
    if (!admin) throw new Error()
    // Check if the password matches
    const match = await bcrypt.compare(req.body.password, admin.password)
    if (!match) throw new Error()
    res.json(createJWT(admin))
  } catch {
    res.status(400).json('Bad Credentials')
  }
}

async function fetchPendingSubs(req, res) {
  try {
    const pendingSubmissions = await Submission.find({ approved: false })
    res.json(pendingSubmissions)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching submissions' })
  }
}

async function sortSubs(req, res) {
  try {
    const submission = await Submission.findById(req.params.id)
    if (!submission) {
      return res.status(404).json({ message: 'Submission not found' })
    }

    submission.approved = req.body.approved
    submission.denied = !req.body.approved

    await submission.save()
    res.json({ message: 'Submission status updated' })
  } catch (error) {
    res.status(500).json({ message: 'Error updating submission status' })
  }
}

module.exports = {
  create,
  login,
  verifyToken,
  fetchPendingSubs,
  sortSubs
}
