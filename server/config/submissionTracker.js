const SubmissionCount = require('../models/submissionCount')

async function trackSubmissions(req, res, next) {
  try {
    const clientIP = req.ip

    // find submission count record for IP address
    let submissionCount = await SubmissionCount.findOne({ ip: clientIP })

    // if no record for this IP, create one
    if (!submissionCount) {
      submissionCount = new SubmissionCount({ ip: clientIP })
    }

    // check if last submission was more than an hour ago
    const currentTime = Date.now()
    const lastSubmissionTime = submissionCount.lastSubmission || 0
    if (currentTime - lastSubmissionTime > 60 * 60 * 1000) {
      // reset count if it has been more than an hour
      submissionCount.count = 0
    }

    // check if user has already exceeded the submission quota
    if (submissionCount.count >= 5) {
      return res
        .status(429)
        .json({
          error:
            'Submission limit exceeded. You can submit a maximum of 5 photos per hour.',
        })
    }

    // update last submission time and increment submission count
    submissionCount.lastSubmission = currentTime
    submissionCount.count += 1
    await submissionCount.save()

    next()
  } catch (error) {
    next(error)
  }
}

module.exports = trackSubmissions
