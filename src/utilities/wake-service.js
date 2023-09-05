import sendRequest from './send-request'

const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_DEPLOYMENT_BACKEND
    : process.env.REACT_APP_DEVELOPMENT_BACKEND

export default function wakeServer() {
  return sendRequest(BASE_URL + '/api/admin/wake', 'PUT')
}
