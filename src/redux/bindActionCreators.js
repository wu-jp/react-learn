// NOTE: 手写bindActionCreators方法

/**
 * 自动分发action的创建函数
 * @param actionCreators
 * @param dispatch
 * @returns {(function(...[*]=))|{}}
 */
export default function (actionCreators, dispatch) {
  if (typeof actionCreators === "function") {
    return getAutoDispatchActionCreator(actionCreators, dispatch)
  } else if (typeof actionCreators === "object") {
    const result = {}
    for (const key in actionCreators) {
      if (actionCreators.hasOwnProperty(key)) {
        const actionCreator = actionCreators[key]
        if (typeof actionCreator === "function") {
          result[key] = getAutoDispatchActionCreator(actionCreator, dispatch)
        }
      }
    }
    return result
  } else {
    throw new TypeError("actionCreators必须是一个object或者function")
  }
}

/**
 * 一个自动分发action的创建函数
 * @param actionCreator
 * @param dispatch
 * @returns {function(...[*]=)}
 */
function getAutoDispatchActionCreator(actionCreator, dispatch) {
  return function (...args) {
    const action = actionCreator(...args)
    dispatch(action)
  }
}
