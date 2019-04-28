import { setUserAction, getUserAction, }

const userReducer = (state, action) => {
  console.log("USER REDUCER", state, action)
  switch (action.type) {
    // payload: user: { id }
    case 'SET_RECIPE':
      return setRecipe(state, action)
    default:
      return state
  }
}

export default userReducer