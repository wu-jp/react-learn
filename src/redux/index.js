import { createStore } from "redux"
import {
  ADD_NUMBER,
  MINUS_NUMBER,
  SET_NUMBER,
  addNumberAction,
  minusNumberAction,
  setNumberAction,
} from "./actions/number-action"

// 创建一个reducer
function reducer(state, action) {
  if (action.type === ADD_NUMBER) {
    return state + 1
  } else if (action.type === MINUS_NUMBER) {
    return state - 1
  } else if (action.type === SET_NUMBER) {
    return action.payload
  } else {
    return state
  }
}

// 创建一个store
const store = createStore(reducer, 10)

// 查看初始化store的状态
console.log(store.getState())

// 分发一个增加的action
store.dispatch(addNumberAction())
console.log(store.getState())

// 分发一个减少的action
store.dispatch(minusNumberAction())
console.log(store.getState())

// 分发一个设置的action
store.dispatch(setNumberAction(100))
console.log(store.getState())
