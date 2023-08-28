import * as mascotAPI from './mascot-api'

// indexes all mascots
export async function indexAllMascots() {
  try {
    const response = await mascotAPI.indexMascots()
    return response
  } catch (error) {
    // Handle error, maybe log it or show a user-friendly message
    console.error('Error fetching pending submissions:', error)
    throw error
  }
}

// shows specific mascot by id
export async function showMascot(mascotId) {
  try {
    const response = await mascotAPI.findMascotById(mascotId)
    return response
  } catch (error) {
    // Handle error, maybe log it or show a user-friendly message
    console.error('Error fetching pending submissions:', error)
    throw error
  }
}
