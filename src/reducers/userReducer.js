const userReducer = (state = { users: [], loading: false}, action) => {
  switch(action.type) {
    case 'LOADING_USER':
      return {

      }
    case 'FIND_USER':
      return {

      }
    case 'CREATE_USER':
      return {

      }
    default:
      return state;
  }
}

export default userReducer;
