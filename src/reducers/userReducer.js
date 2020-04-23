const userReducer = (state = {current_user: {}}, action) => {
  console.log('current user is...', state)
  switch(action.type) {
    case 'SET_USER':

    console.log('Setting User...', action.user)

    state = {current_user: action.user}

    console.log('current_user', state.current_user.email)

    return state
    
      default:
        return state;
  }
}

export default userReducer
