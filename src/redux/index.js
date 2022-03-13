import { createStore } from "redux"

// 创建一个action
const action = {
  type: "add",
}

// 创建一个reducer
function reducer(state, action) {
  if (action.type === "add") {
    return state + 1
  } else if (action.type === "minus") {
    return state - 1
  } else {
    return state
  }
}

// 创建一个store
const store = createStore(reducer, 10)

// 查看当前store的状态
console.log(store.getState())

// 分发一个action，告诉store进行修改数据
store.dispatch(action)

// 查看当前store的状态
console.log(store.getState())
