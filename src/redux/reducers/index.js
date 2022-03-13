import { combineReducers } from "redux"
import userReducer from "./userReducer"
import userListReducer from "./userListReducer"

export default combineReducers({
  userReducer,
  userListReducer,
})
