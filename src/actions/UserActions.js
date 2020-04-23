const URL = 'http://127.0.0.1:3000/users'

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_USERS'})
    fetch(URL)
      .then(res => {
        return res.json()
      })
        .then(resJSON => {
          dispatch({type: 'ADD_USERS', users: resJSON })
      })
  }
}

export const fetchUser = (user) => {
  return (dispatch) => {
    fetch(URL, {
      method: "POST",
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({user: user})
    })
      .then(res => {
        return res.json()
      })
        .then(resJSON => {
          dispatch({type: 'SET_USER', user: resJSON })
      })
  }
}
