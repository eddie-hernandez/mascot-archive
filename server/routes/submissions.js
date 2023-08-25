const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const upload = require('../config/aws');
const verifyToken = require('../config/verifyToken'); // Import the verifyToken middleware
const Submission = require('../models/submission');

// handling form submissions
router.post('/submit', verifyToken, upload.single('photo'), [
  body('description').trim().notEmpty().withMessage('Description is required'),
], async (req, res) => {
  try {
    // validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { description } = req.body;
    const imageUrl = req.file.location; // S3 link for uploaded photo

    // creating a new submission in the database
    const submission = new Submission({
      imageUrl,
      description
    });
    await submission.save();

    res.json({ message: 'Submission received successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing your submission' });
  }
});

module.exports = router;