const Submission = require('../models/submission')

async function postSubmission(req, res, next) {
  try {
    // Save metadata to MongoDB
    const newSubmission = new Submission({
      imagePath: req.file.location,
    })

    newSubmission.types = req.body.types;

    await newSubmission.save()

    res.status(200).json({ message: 'Photo submitted successfully' })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

module.exports = { postSubmission }
