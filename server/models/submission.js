const mongoose = require('mongoose')
const Schema = mongoose.Schema

const submissionSchema = new Schema(
  {
    imagePath: {
      type: String,
      required: true,
    },
    types: [{
      type: String,
      required: true,
    }],
    locationDescription: {
      type: String,
      required: true,
    },
    comments: {
      type: String,
      required: false,
    },
    approved: {
      type: Boolean,
      default: false,
    },
    denied: {
      type: Boolean,
      default: false,
    }
  },
  {
    timestamps: true,
  }
)

const Submission = mongoose.model('Submission', submissionSchema)

module.exports = Submission
