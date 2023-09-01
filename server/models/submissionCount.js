const mongoose = require('mongoose');

// schema for submission counts
const submissionCountSchema = new mongoose.Schema({
  ip: {
    type: String,
    required: true,
    unique: true,
  },
  count: {
    type: Number,
    default: 0,
  },
});

// model for submission counts
const SubmissionCount = mongoose.model('SubmissionCount', submissionCountSchema);

module.exports = SubmissionCount 