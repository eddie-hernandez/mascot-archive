const SubmissionCount = require('../models/submissionCount');

async function trackSubmissions(req, res, next) {
  try {
    const clientIP = req.ip;

    // find submission count record for the IP address
    let submissionCount = await SubmissionCount.findOne({ ip: clientIP });

    // if no record for this IP, create one
    if (!submissionCount) {
      submissionCount = new SubmissionCount({ ip: clientIP });
    }

    // check if user has already exceeded the submission quota
    if (submissionCount.count >= 5) {
      return res.status(429).json({ error: 'Submission limit exceeded. You can submit a maximum of 5 photos per hour.' });
    }

    // increment submission count and save it
    submissionCount.count += 1;
    await submissionCount.save();

    next();
  } catch (error) {
    next(error);
  }
}

module.exports = trackSubmissions;