import { combineReducers } from "redux";
import globalReducer from './globalReducer'
import usersReducer from './usersReducer'

export default combineReducers({
  global: globalReducer,
  users: usersReducer,
})