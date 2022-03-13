import compose from "./compose"

export default function (...middlewares) {
  return function (createStore) {
    return function (reducer, defaultState) {
      const store = createStore(reducer, defaultState)
      let dispatch = () => {
        throw new Error("目前还不可以使用dispatch")
      }
      const simpleStore = {
        getState: store.getState,
        dispatch: store.dispatch,
      }

      const dispatchProducers = middlewares.map(mid => mid(simpleStore))
      dispatch = compose(...dispatchProducers)(store.dispatch)

      return {
        ...store,
        dispatch,
      }
    }
  }
}
