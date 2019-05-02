const errorReducer = (state = {}, action) => {
  if (action.error) alert("ERROR REDUCER", state, action)
  // alert(action.error)
  switch (action.type) {
    case 'FETCH_ERROR':
      debugger
      return {...state, error: action.error}
    case 'NETWORK_ERROR':
      debugger
      return {...state, error: action.error}
    default:
      return state
  }
}

export default errorReducer