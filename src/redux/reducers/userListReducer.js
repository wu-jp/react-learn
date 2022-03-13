import { ADD_USER, DELETE_USER } from "../actions/userListAction"
import { v4 as uuidv4 } from "uuid"

const initialState = [
  {
    uuid: uuidv4(),
    name: "wuyioo",
    age: 18,
  },
  {
    uuid: uuidv4(),
    name: "wuyi11",
    age: 19,
  },
]

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_USER:
      return [...state, payload]

    case DELETE_USER:
      return state.filter(item => item.uuid !== payload)

    default:
      return state
  }
}
