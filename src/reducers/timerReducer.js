import { SELECT_TIMER, NEW_TIMER, TOGGLE_TIMER } from '../actions'

export default ( state = null, action) => {
  switch(action.type) {
    case SELECT_TIMER:
     return state = action.payload.index;

    default:
      return state;
  }
}

export default (state = [], action) => {
  let index;
  let timer;

  switch(action.type) {
    case NEW_TIMER:
      timer = action.payload.name ? action.payload.name : `Timer ${state.length}`
      return [...state, new Timer(timer)]

    case TOGGLE_TIMER:
      index = state.findIndex(timer => timer.id === action.payload.index)
      timer = state[index];
        return {...timer, isRunning: !timer.isRunning}

    default:
      return state;
  }
}
