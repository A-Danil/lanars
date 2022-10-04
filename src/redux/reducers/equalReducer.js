const initialState = {
  value: null
}

export const equalReducer = (state = initialState, action) =>{
  switch (action.type){

    case "IS_EQUAL":
      return {
        ...state,
        value: action.value
      }

    default:
      return state
  }
}