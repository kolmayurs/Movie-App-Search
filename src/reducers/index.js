export default function reducer(state={
  fetching:false,
  fetched:false,
  data: [],
  error: null,
  val: [],
  is_fav:false,
}, action){
  switch(action.type){
    case "FETCH_USER_START" : {
      return {...state, fetching: true, }
    }

    case "FETCH_USERS_ERROR" : {
    return{...state, fetching:false, error: action.payload}
    }

    case "RECEIVE_USERS" :{
      return{...state, fetching:false, fetched: true, data: action.payload}
    }

    case "USERS_SORT" :{
      return{...state, fetching:false, fetched: true, data: action.payload}
    }
/*    case "IS_FAV" :{
      return{...state,is_fav:true , fetched: true, val: action.payload}
    }
    case "IS_NOT_FAV" :{
      return{...state,is_fav:false , fetched: true, val: action.payload}
    }
    */
    }
  return state
}
