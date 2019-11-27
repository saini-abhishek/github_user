import store from "../store"

const initialState = {
  userData : undefined,
  isFetching : false,
  isError : false
}

const asyncReducer = function( state=initialState, action){
  switch(action.type){
    case('FETCH_USER'):
      return {...store, isFetching: true}
    case('FETCHED_USER'):
      return {
        ...store,
        userData: action.data,
        isFetching: false,
        isError: false
      }
    case('RECIEVE_ERROR'):
      return {
        ...state,
        isError: true,
        isFetching: false
      }
    default:
      return state
  }
}

export default asyncReducer;