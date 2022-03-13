import { createStore, bindActionCreators, applyMiddleware } from "redux"
import { updateUserAction } from "./actions/userAction"
import { addUserAction, deleteUserAction } from "./actions/userListAction"
import reducer from "./reducers"

import { logger } from "redux-logger"

// 方式一：
const store = createStore(reducer, applyMiddleware(logger))
// 方式二：
// const store = applyMiddleware(log1,log2)(createStore)(reducer)

const bindAction = bindActionCreators(
  {
    updateUserAction,
    addUserAction,
    deleteUserAction,
  },
  store.dispatch
)

const user = {
  uuid: "001",
  name: "测试",
  age: 1,
}

bindAction.updateUserAction(user)
