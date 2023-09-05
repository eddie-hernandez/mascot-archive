import sendRequest from './send-request';

const BASE_URL = `${process.env.REACT_APP_BASE_URL}/api/submit`

// submit photo
export function submitPhoto(formData) {
  return sendRequest(BASE_URL, 'POST', formData);
}