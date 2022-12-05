const initState={
  popular:[],
  best:[]
}

const MovieReduser=(state=initState,action)=>{
  switch(action.type){
    case "FETCH_MOVIE":
      return ({...state,
         popular:action.payload.popular,
         best:action.payload.best,
        })
    default :
      return ({...state})
  }
}

export default MovieReduser;