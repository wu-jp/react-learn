import { createStore, bindActionCreators, applyMiddleware } from "redux"
import { updateUserAction } from "./actions/userAction"
import { addUserAction, deleteUserAction, fetchUsers } from "./actions/userListAction"
import reducer from "./reducers"

import { logger } from "redux-logger"
import thunk from "redux-thunk"

const store = createStore(reducer, applyMiddleware(thunk, logger))

const bindAction = bindActionCreators(
  {
    updateUserAction,
    addUserAction,
    deleteUserAction,
    fetchUsers,
  },
  store.dispatch
)

bindAction.fetchUsers()
