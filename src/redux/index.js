import { createStore } from "redux"
import { updateUserAction } from "./actions/userAction"
import { addUserAction, deleteUserAction } from "./actions/userListAction"
import reducer from "./reducers"

const store = createStore(reducer)

const user = {
  uuid: "001",
  name: "测试",
  age: 1,
}

// 先查看默认状态
console.log(store.getState())

// 分发一个更新用户学习的action
store.dispatch(updateUserAction(user))
console.log(store.getState())

// 分发一个新增用户的action
store.dispatch(addUserAction(user))
console.log(store.getState())

// 分发一个删除用户的action
store.dispatch(deleteUserAction("001"))
console.log(store.getState())
