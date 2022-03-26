import { getAllStudents } from "../../services/student"

export const ADD_USER = "add-user"
export const DELETE_USER = "delete_user"
export const SHOW_LOADING = "show-loading"

export const addUserAction = user => ({
  type: ADD_USER,
  payload: user,
})
export const deleteUserAction = id => ({
  type: DELETE_USER,
  payload: id,
})
export const showLoadingAction = isLoading => ({
  type: SHOW_LOADING,
  payload: isLoading,
})

export function fetchUsers() {
  return async function (dispatch, getState) {
    dispatch(showLoadingAction(true))
    const users = getAllStudents()
    dispatch(addUserAction(users))
    dispatch(showLoadingAction(false))
  }
}
