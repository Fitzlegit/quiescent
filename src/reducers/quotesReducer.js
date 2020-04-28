const quotesReducer = (state = { quotes: [], loading: false}, action) => {
  switch(action.type) {
    case 'LOADING_QUOTES':
      console.log('loading...')
      return {
        ...state,
        loading: true
      }

    case 'ADD_QUOTES':
      return {
        ...state,
        quotes: action.quotes[Math.floor(Math.random() *action.quotes.length)],
        loading: false
      }
    default:
      return state;
  }
}

export default quotesReducer;
