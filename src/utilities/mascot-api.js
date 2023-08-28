import sendRequest from './send-request'
const BASE_URL = '/api/mascots'

// index mascots
export function indexMascots() {
  return sendRequest(BASE_URL + '/', 'GET')
}

// find mascot by id
export function findMascotById(mascotId) {
  return sendRequest(BASE_URL + `/${mascotId}`, 'GET')
}