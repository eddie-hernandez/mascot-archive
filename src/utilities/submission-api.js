import sendRequest from './send-request';

const BASE_URL = `${process.env.REACT_APP_DEPLOYMENT_BACKEND}/api/submit`
  // process.env.NODE_ENV === 'production'
  //   ? process.env.REACT_APP_DEPLOYMENT_BACKEND
  //   : process.env.REACT_APP_DEVELOPMENT_BACKEND

// submit photo
export function submitPhoto(formData) {
  return sendRequest(BASE_URL, 'POST', formData);
}