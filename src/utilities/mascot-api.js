import sendRequest from './send-request'

const BASE_URL = `${process.env.REACT_APP_DEPLOYMENT_BACKEND}/api/mascots`
  // process.env.NODE_ENV === 'production'
  //   ? process.env.REACT_APP_DEPLOYMENT_BACKEND
  //   : process.env.REACT_APP_DEVELOPMENT_BACKEND

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
  return sendRequest(BASE_URL + `/${type}`, 'GET')
}

// index random mascot
export function indexRandomMascot() {
  return sendRequest(BASE_URL + '/random', 'GET')
}
