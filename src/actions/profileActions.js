const URL = 'http://127.0.0.1:3000/profiles'

export const updateProfile = (profile) => {
  return (dispatch) => {
    fetch(URL, {
      method: 'PATCH',
      headers: { 'Content-type' : 'application/json' },
      body: JSON.stringify({profile: profile})
    })
      .then(res => {
        return res.json()
      })
      .then(resJSON => {
        dispatch({type: 'UPDATE_PROFILE', profile: resJSON })
      })
  }
}

export const saveProfile = (profile) => {
  return (dispatch) => {
    fetch(URL, {
      method: 'POST',
      headers: { 'Content-type' : 'application/json'},
      body: JSON.stringify({profile: profile})
    })
      .then(res => {
        return res.json()
      })
      .then(resJSON => {
        dispatch({type: 'SAVE_PROFILE', profile: resJSON })
      })
  }
}
