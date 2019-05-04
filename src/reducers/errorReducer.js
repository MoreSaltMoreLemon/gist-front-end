const errorReducer = (state = {}, action) => {
  if (action.error) alert("ERROR REDUCER", state, action)
  // alert(action.error)
  switch (action.type) {
    case 'REQUEST_ERROR':
      debugger
      return {...state, error: action.error}
    case 'NETWORK_ERROR':
      debugger
      return {...state, error: action.error}
    case 'REQUEST_TIMEOUT':
      debugger
      return {...state, error: action.error}
    case 'TOO_MANY_REQUESTS':
      debugger
      return {...state, error: action.error}
    case 'SERVICE_UNAVAILABLE':
      debugger
      return {...state, error: action.error}
    case 'NETWORK_AUTHENTICATION_REQUIRED':
      debugger
      return {...state, error: action.error}
    default:
      return state
  }
}

export default errorReducer