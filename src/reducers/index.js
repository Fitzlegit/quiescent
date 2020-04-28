import { combineReducers } from 'redux';
import profileReducer from './profileReducer'
import quotesReducer from './quotesReducer'
import userReducer from './userReducer'


export default combineReducers({
  profile: profileReducer,
  quotes: quotesReducer,
  user: userReducer
});
