export default async function sendRequest(url, method = 'GET', data) {
  const options = { method };

  if (method === 'POST') {
    if (data instanceof FormData) {
      // set the proper content-type header for FormData (file upload)
      options.body = data;
    } else {
      // set the content-type header to stringify the json data
      options.headers = {
        'Content-Type': 'application/json',
      };
      options.body = JSON.stringify(data);
    }
  }

  const res = await fetch(url, options);

  if (res.ok) {
    if (res.status !== 204) {
      return res.json();
    } else {
      return;
    }
  } else {
    throw new Error('Bad Request');
  }
}