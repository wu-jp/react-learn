// import { combineReducers } from "redux"
import combineReducers from "../../redux/combineReducers" //手写的方法
import userReducer from "./userReducer"
import userListReducer from "./userListReducer"

export default combineReducers({
  userReducer,
  userListReducer,
})
