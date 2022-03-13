export const ADD_NUMBER = "add_number"
export const MINUS_NUMBER = "minus_number"
export const SET_NUMBER = "set_number"

export const addNumberAction = () => ({
  type: ADD_NUMBER,
})

export const minusNumberAction = () => ({
  type: MINUS_NUMBER,
})

export const setNumberAction = num => ({
  type: SET_NUMBER,
  payload: num,
})
