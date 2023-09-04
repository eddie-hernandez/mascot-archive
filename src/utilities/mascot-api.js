import sendRequest from './send-request'
const BASE_URL = ''
  // process.env.NODE_ENV === 'production'
  //   ? process.env.REACT_APP_DEPLOYMENT_BACKEND
  //   : process.env.REACT_APP_DEVELOPMENT_BACKEND

// index mascots
export function indexMascots() {
  return sendRequest(BASE_URL + '/api/mascots/', 'GET')
}

// find mascot by id
export function findMascotById(mascotId) {
  return sendRequest(BASE_URL + `/api/mascots/${mascotId}`, 'GET')
}

// index mascots by type
export function indexMascotsByType(type) {
  return sendRequest(BASE_URL + `/api/mascots/types/${type}`, 'GET')
}

// index random mascot
export function indexRandomMascot() {
  return sendRequest(BASE_URL + 'api/mascots/random', 'GET')
}
