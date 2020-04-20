import { NEW_TIMER, TOGGLE_TIMER } from '../actions/timerActions'
import Timer from '../components/Timer'

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
