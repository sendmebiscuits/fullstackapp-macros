let defaultState = {
  errorMsg: ''
};

function errors(state=defaultState, action){
  switch(action.type){
    case('FETCH_QUERY_RESULTS_FAILURE'):
      return {
        ...state,
        errorMsg: action.data.msg
      }
    case('FETCH_QUERY_RESULTS_SUCCESS'):
      return {
        ...state,
        errorMsg: ''
      }
    case('FETCH_FOOD_NUTRIENTS_FAILURE'):
      return {
        ...state,
        errorMsg: action.data.msg
      }
    case('FETCH_FOOD_NUTRIENTS_SUCCESS'):
      return {
        ...state,
        errorMsg: ''
      }
    case('EMPTY_QUERY'):
      return {
        ...state,
        errorMsg: action.data.msg
      }
    case('CHANGE_QUERY'):
      return {
        ...state,
        errorMsg: action.data.msg
      }
      
    default:
      return state
  }
}

export default errors;