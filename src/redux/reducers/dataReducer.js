const initialState = {
  data: []
}

export const dataReducer = (state = initialState, action) =>{
  switch (action.type){

    case "DATA_LOAD":
      const newData = action.data.map(res => (
        {
          number: res,
          isEqual: false
        }
      ))
      return {
        ...state,
        data: newData
      }

    default:
      return state
  }
}
