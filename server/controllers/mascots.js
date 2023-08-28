const Submission = require('../models/submission')

async function indexMascots(req, res, next) {
  try {
    const mascots = await Submission.find()
    if (!mascots) return new Error('No mascots available')
    const mascot = mascots.map((mascots) => mascots)
    return res.status(200).json({ mascot: mascot })
  } catch (error) {
    next(error)
    console.log(error)
  }
}

// show by mascot id

async function findMascotById(req, res, next) {
  try {
    const mascot = await Submission.findById(req.params.id)
    if (!mascot) return next(new Error('No mascot available'))
    return res.status(200).json({ mascot: mascot })
  } catch (error) {
    next(error)
    console.log(error)
  }
}

module.exports = {
  indexMascots,
  findMascotById
}
