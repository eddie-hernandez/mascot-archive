import sendRequest from './send-request'

const BASE_URL = `${process.env.REACT_APP_BASE_URL}/api/admin/wake`

export default function wakeServer() {
  return sendRequest(BASE_URL, 'GET')
}
