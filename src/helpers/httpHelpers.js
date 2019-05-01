// Modified version of httpRequest for JSON Web Token authorization requests
// must have an "Authorization": "Bearer 1258wtint298pgnp4q3" token included in
// the request in order to pass server side authentication
// httpRequestJWT :: (url: string, method: string, data: {}, jwt: string) -> Promise
function httpRequestJWT(url, method='GET', data={}, jwt = '') {
  const init = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`
    },
    method: method,
    body: JSON.stringify(data)
  }
  if (method.toLowerCase() === 'get') delete init.body;
  else if (method.toLowerCase() === 'post' && init.body.id) delete init.body.id;
  if (jwt === '') delete init.headers['Authorization']
  return fetch( url, init);
}

export { httpRequestJWT }