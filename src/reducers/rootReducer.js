import { combineReducers } from 'redux';
import userReducer from './userReducer'
import profileReducer from './profileReducer'
import timerReducer from './timerReducer'

const rootReducer = combineReducers({
  users: userReducer,
  profiles: profileReducer,
  timers: timerReducer
});

export default rootReducer
