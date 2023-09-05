// import all named exports
import * as adminAPI from './admin-api'

export function getToken() {
  // getItem will return null if the key does not exist
  const token = localStorage.getItem('token')
  if (!token) return null
  // let's check if token has expired...
  const payload = JSON.parse(atob(token.split('.')[1]))
  if (payload.exp < Date.now() / 1000) {
    // token has expired
    localStorage.removeItem('token')
    return null
  }
  return token
}

export async function verifyToken() {
  return adminAPI.verifyToken().then((dateStr) => new Date(dateStr))
}

export function getAdmin() {
  const token = getToken()
  return token ? JSON.parse(atob(token.split('.')[1])).admin : null
}

export async function signUp(adminData) {
  // delegate the AJAX request to the admins-api.js module
  const token = await adminAPI.signUp(adminData)
  localStorage.setItem('token', token)
  return getAdmin()
}

export function logOut() {
  localStorage.removeItem('token')
}

export async function login(credentials) {
  // delegate the AJAX request to the admin-api.js module.
  const token = await adminAPI.login(credentials)
  localStorage.setItem('token', token)
  return getAdmin()
}

export async function fetchPendingSubs() {
  try {
    const pendingSubs = await adminAPI.fetchPendingSubs()
    return pendingSubs
  } catch (error) {
    // Handle error, maybe log it or show a user-friendly message
    console.error('Error fetching pending submissions:', error)
    throw error
  }
}

export async function fetchApprovedSubs() {
  try {
    const approvedSubs = await adminAPI.fetchApprovedSubs()
    return approvedSubs
  } catch (error) {
    // Handle error, maybe log it or show a user-friendly message
    console.error('Error fetching approved submissions:', error)
    throw error
  }
}

export async function fetchDeniedSubs() {
  try {
    const deniedSubs = await adminAPI.fetchDeniedSubs()
    return deniedSubs
  } catch (error) {
    // Handle error, maybe log it or show a user-friendly message
    console.error('Error fetching denied submissions:', error)
    throw error
  }
}

export async function sortSubs(submissionId, status) {
  try {
    const response = await adminAPI.sortSubs(submissionId, { approved: status })
    // optionally, you can return some information based on the response
    return response
  } catch (error) {
    // handle error, maybe log it or show a user-friendly message
    console.error('Error updating submission status:', error)
    throw error
  }
}
