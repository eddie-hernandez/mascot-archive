const Submission = require('../models/submission')

// index approved mascots, not all mascots!
async function indexApprovedMascots(req, res, next) {
  try {
    const mascots = await Submission.find({ approved: true })
    if (!mascots) return new Error('No mascots available')
    return res.status(200).json({ mascots })
  } catch (error) {
    next(error)
    console.log(error)
  }
}

// index mascots by type
async function indexMascotsByType(req, res, next) {
  try {
    console.log(req.params)
    const requestedTypes = req.params.types

    // $in operator matches documents that have at least one of the requested types
    const mascots = await Submission.find({
      approved: true,
      types: { $in: requestedTypes },
    });
    if (!mascots) return new Error('No mascots available')
    return res.status(200).json({ mascots })
  } catch (error) {
    next(error)
    console.log(error)
  }
}

// show by mascot id
async function findMascotById(req, res, next) {
  if (req.params.id !== 'random') {
    try {
      const mascot = await Submission.findById(req.params.id)
      if (!mascot) return next(new Error('No mascot available'))
      return res.status(200).json({ mascot: mascot })
    } catch (error) {
      next(error)
      console.log(error)
    }
  }
}

// index random approved mascot
async function getRandomMascot(req, res, next) {
  try {
    const randomMascot = await Submission.aggregate([
      { $match: { approved: true } },
      { $sample: { size: 1 } },
    ])

    if (!randomMascot.length) {
      return res.status(404).json({ message: 'No approved mascots available' })
    }

    return res.status(200).json({ mascot: randomMascot[0] })
  } catch (error) {
    next(error)
    console.log(error)
  }
}

module.exports = {
  indexApprovedMascots,
  getRandomMascot,
  indexMascotsByType,
  findMascotById,
}
