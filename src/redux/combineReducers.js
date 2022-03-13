import isPlainObject from "./utils/isPlainObject"
import actionTypes from "./utils/actionTypes"

function validateReducers(reducers) {
  if (typeof reducers !== "object") {
    throw new TypeError("reducers 必须是一个对象")
  }
  if (!isPlainObject(reducers)) {
    throw new TypeError("reducers 必须是一个平面对象")
  }

  //验证reducer的返回结果是否为undefined
  for (const key in reducers) {
    if (reducers.hasOwnProperty(key)) {
      const reducer = reducers[key]

      let state = reducer(undefined, {
        type: actionTypes.INIT(),
      })
      if (state === undefined) {
        throw new TypeError("reducer 的不能为undefined")
      }
      state = reducer(undefined, {
        type: actionTypes.UNKNOWN(),
      })
      if (state === undefined) {
        throw new TypeError("reducer 的不能为undefined")
      }
    }
  }
}

export default function (reducers) {
  validateReducers(reducers)

  return function (state = {}, action) {
    const newState = {}
    for (const key in reducers) {
      if (reducers.hasOwnProperty(key)) {
        const reducer = reducers[key]
        newState[key] = reducer(state[key], action)
      }
    }
    return newState
  }
}
