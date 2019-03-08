import { combineReducers } from 'redux';
import AuthReducer from './reducers/AuthReducer';

// Redux combines the reducers together
export default combineReducers({
  auth: AuthReducer
});
