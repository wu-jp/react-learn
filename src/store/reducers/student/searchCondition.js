// 查询学生条件

import { actionTypes } from "../../actions/student/searchCondition"

// 默认状态
const initialState = {
  key: "",
  sex: -1,
  page: 1,
  limit: 10,
}

export const searchCondition = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.change:
      return { ...state, ...payload }
    default:
      return state
  }
}
