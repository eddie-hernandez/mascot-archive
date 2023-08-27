import sendRequest from './send-request'
const BASE_URL = '/api/admin'

// fetch pending submissions
export function fetchPendingSubs() {
  return sendRequest(`${BASE_URL}/submissions/pending`);
}

// update submission status
export function sortSubs(submissionId, status) {
  return sendRequest(`${BASE_URL}/submissions/${submissionId}`, 'POST', status);
}

// admin sign up
export function signUp(adminData) {
  return sendRequest(BASE_URL + '/', 'POST', adminData)
}

// admin log in
export function login(credentials) {
  return sendRequest(BASE_URL + '/login', 'POST', credentials)
}

// check that user is logged in with token
export function verifyToken() {
  return sendRequest(`${BASE_URL}/verify-token`)
}
