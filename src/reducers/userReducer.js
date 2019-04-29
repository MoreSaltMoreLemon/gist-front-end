const userReducer = (state = {}, action) => {
  // console.log("USER REDUCER", state, action)
  switch (action.type) {
    case 'SET_USER':
      return {...action.user}
    case 'CLEAR_USER':
      return {}
    default:
      return state
  }
}

export default userReducer