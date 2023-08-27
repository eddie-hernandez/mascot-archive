// import all named exports
import * as adminAPI from './admin-api'

export function getAdmin() {
  const token = getToken()
  return token ? JSON.parse(atob(token.split('.')[1])).user : null
}

export async function signUp(adminData) {
  // delegate the AJAX request to the admins-api.js module
  const token = await adminAPI.signUp(adminData)
  localStorage.setItem('token', token)
  return getAdmin()
}

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


export function logOut() {
  localStorage.removeItem('token')
}

export async function login(credentials) {
  // delegate the AJAX request to the admin-api.js module.
  const token = await adminAPI.login(credentials)
  localStorage.setItem('token', token)
  return getAdmin()
}

export function checkToken() {
  return adminAPI.checkToken().then((dateStr) => new Date(dateStr))
}