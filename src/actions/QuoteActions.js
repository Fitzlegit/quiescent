const URL = 'https://type.fit/api/quotes'

export const fetchQuotes = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_QUOTES'})
      fetch(URL)
        .then(res => {
          return res.json()
      })
        .then(resJSON => {
          dispatch({ type: 'ADD_QUOTES', quotes: resJSON })
      })
    }
  }
