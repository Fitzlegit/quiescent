import { combineReducers } from 'redux';
import userReducer from './userReducer'
import profileReducer from './profileReducer'
import timerReducer from './timerReducer'
import selectTimerReducer from './selectTimerReducer'

const rootReducer = combineReducers({
  users: userReducer,
  profiles: profileReducer,
  timers: timerReducer,
  selectedTimer: selectTimerReducer
});

export default rootReducer
