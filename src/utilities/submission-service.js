import * as submissionAPI from './submission-api.js'

// photo submission
export async function submitNewPhoto(formData) {
  const newSubmission = await submissionAPI.submitPhoto(formData)
  return newSubmission
}