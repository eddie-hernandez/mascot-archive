import sendRequest from './send-request'

const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_DEPLOYMENT_BACKEND
    : process.env.REACT_APP_DEVELOPMENT_BACKEND

// check that user is logged in with token
export function verifyToken() {
  return sendRequest(`${BASE_URL}/verify-token`)
}

// admin sign up
export function signUp(adminData) {
  return sendRequest(BASE_URL + '/api/admin', 'POST', adminData)
}

// admin log in
export function login(credentials) {
  return sendRequest(BASE_URL + '/api/admin/login', 'POST', credentials)
}

// fetch pending submissions
export function fetchPendingSubs() {
  return sendRequest(BASE_URL + '/api/admin/submissions/pending', 'GET')
}

// fetch approved submissions
export function fetchApprovedSubs() {
  return sendRequest(BASE_URL + '/api/admin/submissions/approved', 'GET')
}

// fetch denied submissions
export function fetchDeniedSubs() {
  return sendRequest(BASE_URL + '/api/admin/submissions/denied', 'GET')
}

// update submission status
export function sortSubs(submissionId, status) {
  return sendRequest(BASE_URL + `/submissions/${submissionId}`, 'POST', status)
}
