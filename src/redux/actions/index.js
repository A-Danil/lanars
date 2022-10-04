function loaderOn(){
  return {
    type: "LOADER_DISPLAY_ON"
  }
}

function loaderOff(){
  return {
    type: "LOADER_DISPLAY_OFF"
  }
}

function errorOn(text){
  return {
    type: "ERROR_DISPLAY_ON",
    text
  }
}

export function dataLoad(data){
  return async dispatch => {
    try{
      dispatch(loaderOn())

      setTimeout(()=>{
        dispatch({
          type: "DATA_LOAD",
          data
        })
        dispatch(loaderOff());
      }, 2000)
    } catch (err){
        dispatch(errorOn('Ошибка АРІ'));
        dispatch(loaderOff());
    }
  }
}
