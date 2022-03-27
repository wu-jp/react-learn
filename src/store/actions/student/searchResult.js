import { searchStudents } from "../../../services/student"

export const actionTypes = {
  setStudentsAndTotal: Symbol("setStudentsAndTotal"),
  setIsLoading: Symbol("setIsLoading"),
}

export function setStudentsAndTotal(students, total) {
  return {
    type: actionTypes.setStudentsAndTotal,
    payload: { students, total },
  }
}

export function setIsLoading(isLoading) {
  return {
    type: actionTypes.setIsLoading,
    payload: isLoading,
  }
}

export function fetchStudents() {
  return async (dispatch, getState) => {
    dispatch(setIsLoading(true))
    console.log(getState())
    const searchCondition = getState().students.searchCondition
    const { datas, cont } = await searchStudents(searchCondition)
    dispatch(setStudentsAndTotal(datas, cont))
    dispatch(setIsLoading(false))
  }
}
