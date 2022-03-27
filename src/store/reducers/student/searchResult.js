import { actionTypes } from "../../actions/student/searchResult"

// 默认状态
const initialState = {
  students: [],
  total: 0,
  isLoading: false,
}

export const searchResult = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.setIsLoading:
      return { ...state, isLoading: payload }
    case actionTypes.setStudentsAndTotal:
      return {
        ...state,
        ...payload,
      }
    default:
      return state
  }
}
