import { combineReducers } from 'redux';
import userReducer from './userReducer'
import profileReducer from './profileReducer'


const rootReducer = combineReducers({
  users: userReducer,
  profiles: profileReducer
});

export default rootReducer
