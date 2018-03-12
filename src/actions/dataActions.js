
export  function fetchData(){
	return function(dispatch){
  dispatch({type:"FETCH_USER_START"})
  fetch("https://api.themoviedb.org/3/movie/popular?api_key=80a5e68d306aa343acd190456d8d687f&language=en-US&page=1")
  .then((Response) => Response.json())
    .then((findresponse)=>{
    dispatch({type:"RECEIVE_USERS", payload: findresponse.results})
  })
  .catch((err) => {
    dispatch({type:"FETCH_USERS_ERROR", payload: err})
  }) 

}
}
/*
 export function isFav(payload) {
  return {
    type: "IS_FAV",
    payload
  }
}

export function isNotFav(payload) {
  return {
    type: "IS_NOT_FAV",
    payload
  }
}
*/