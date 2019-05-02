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

function returnedError(response) {
  if (response.status < 400) return false
  else return true
}

async function handleError(response) {
  const json = await response.json()

  return {
    type: 'FETCH_ERROR',
    response: json
  }
}

async function handleRequestAction(url, method, body, jwt, actionType, propertyName) {
  try {
    const response = await httpRequestJWT(url, method, body, jwt)
    if (returnedError(response)) return handleError(response)

    const payload = await response.json()
    return { 
      type: actionType,
      [propertyName]: payload
    }
  } catch(error) {
    return {
      type: 'NETWORK_ERROR',
      error
    }
  }
}

export { httpRequestJWT, handleRequestAction }