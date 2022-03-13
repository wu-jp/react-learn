export const ADD_USER = "add-user"
export const DELETE_USER = "delete_user"

export const addUserAction = user => ({
  type: ADD_USER,
  payload: user,
})
export const deleteUserAction = id => ({
  type: DELETE_USER,
  payload: id,
})
