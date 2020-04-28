const profileReducer = (state = {current_profile: {}}, action) => {
  switch(action.type) {
    case 'SET_PROFILE':
      console.log('setting profile', action.profile )

      return {
        ...state, current_profile: action.profile
      }


    case 'SAVE_PROFILE':
      console.log('Saving profile...', action.profile)

      return {
        ...state, current_profile: action.profile
      }
      default:
        return state
  }
}

export default profileReducer;
