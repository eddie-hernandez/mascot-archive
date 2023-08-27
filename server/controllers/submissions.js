const Submission = require('../models/submission')

async function postSubmission(req, res, next) {
  try {
    // Save metadata to MongoDB
    const newSubmission = new Submission({
      imagePath: req.file.location,
      category: req.body.category,
      locationDescription: req.body.locationDescription,
      comments: req.body.comments,
    })

    await newSubmission.save()

    res.status(200).json({ message: 'Photo submitted successfully' })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

module.exports = { postSubmission }
