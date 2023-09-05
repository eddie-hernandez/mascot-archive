import * as submissionAPI from './submission-api.js'

// photo submission
export async function submitNewPhoto(formData) {
  try {
    const response = await submissionAPI.submitPhoto(formData)
    return response
  } catch (error) {
    console.error('Error submitting photo:', error)
    throw error
  }
}
