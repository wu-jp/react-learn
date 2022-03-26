import { ADD_USER, DELETE_USER, SHOW_LOADING } from "../actions/userListAction"
import { v4 as uuidv4 } from "uuid"

const initialState = {
  data: [],
  isLoading: false,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_USER:
      // return [...state, payload]
      return {
        ...state,
        data: [...state.data, payload],
      }

    case DELETE_USER:
      // return state.filter(item => item.uuid !== payload)
      return {
        ...state,
        data: state.data.filter(item => item.uuid !== payload),
      }

    case SHOW_LOADING:
      return {
        ...state,
        isLoading: payload,
      }

    default:
      return state
  }
}
