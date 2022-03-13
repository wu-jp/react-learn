import { UPDATE_USER } from "../actions/userAction"
import { v4 as uuidv4 } from "uuid"

const initialState = {
  uuid: uuidv4(),
  name: "wuyi",
  age: 17,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_USER:
      return payload

    default:
      return state
  }
}
