import sendRequest from './send-request'

const BASE_URL = `${process.env.REACT_APP_BASE_URL}/api/mascots`

// index mascots
export function indexMascots() {
  return sendRequest(BASE_URL, 'GET')
}

// find mascot by id
export function findMascotById(mascotId) {
  return sendRequest(BASE_URL + `/${mascotId}`, 'GET')
}

// index mascots by type
export function indexMascotsByType(type) {
  return sendRequest(BASE_URL + `/types/${type}`, 'GET')
}

// index random mascot
export function indexRandomMascot() {
  return sendRequest(BASE_URL + '/random', 'GET')
}
