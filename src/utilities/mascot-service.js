import * as mascotAPI from './mascot-api'

// indexes all mascots
export async function indexApprovedMascots() {
  try {
    const response = await mascotAPI.indexMascots()
    return response.mascots
  } catch (error) {
    // Handle error, maybe log it or show a user-friendly message
    console.error('Error fetching pending submissions:', error)
    throw error
  }
}

// indexes mascots by type
export async function indexMascotsByType(type) {
  try {
    const response = await mascotAPI.indexMascotsByType(type);
    return response.mascots
  } catch (error) {
    console.error('Error fetching mascots by type:', error);
    throw error;
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

// index random mascot
export async function indexRandomMascot() {
  try {
    const response = await mascotAPI.indexRandomMascot();
    return response.mascot;
  } catch (error) {
    console.error('Error fetching random mascot:', error);
    throw error;
  }
}