import sendRequest from './send-request';

const BASE_URL = '/api/submit'

// submit photo
export function submitPhoto(formData) {
  return sendRequest(BASE_URL, 'POST', formData);
}

// index photos

// find specific photo