const URL = 'http://127.0.0.1:3000/profiles'

// export const fetchProfile = (user) => {
//   return (dispatch) => {
//     fetch(URL, {
//       method: "POST",
//       headers: { 'Content-Type': 'application/json'},
//       body: JSON.stringify({user: user})
//     })
//       .then(res => {
//         return res.json()
//       })
//         .then(resJSON => {
//           dispatch({type: 'SET_USER', user: resJSON })
//       })
//   }
// }


// export const fetchProfile = (profile) => {
//   return (dispatch) => {
//     fetch(URL, {
//       method: 'POST',
//       headers: { 'Content-type' : 'application/json'},
//       body: JSON.stringify({profile: profile})
//     })
//       .then(res => {
//         return res.json()
//       })
//       .then(resJSON => {
//         dispatch({type: 'FIND_PROFILE', profile: resJSON })
//       })
//   }
// }



export const updateProfile = () => {

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
