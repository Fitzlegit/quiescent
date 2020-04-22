const URL = 'http://127.0.0.1:3000/users'

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch( type: 'LOADING_USERS')
    fetch(URL)
      .then(res => {
        return res.json()
      })
        .then(resJSON => {
          dispatch({type 'ADD_USERS', users: resJSON })
      })
  }
}
