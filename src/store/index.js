import { createStore, bindActionCreators, applyMiddleware } from "redux"

import { updateUserAction } from "./actions/userAction"
import { addUserAction, deleteUserAction } from "./actions/userListAction"
import reducer from "./reducers"

const log1 = function (store) {
  return function (nextDispatch) {
    return function (action) {
      console.log("中间件1")
      console.log("旧数据", store.getState())
      console.log("action", action.type)
      nextDispatch(action)
      console.log("新数据", store.getState())
      console.log("-------")
    }
  }
}

const log2 = store => nextDispatch => action => {
  console.log("中间件2")
  console.log("旧数据", store.getState())
  console.log("action", action.type)
  nextDispatch(action)
  console.log("新数据", store.getState())
  console.log("--------")
}

// 方式一：
const store = createStore(reducer, applyMiddleware(log1, log2))
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
