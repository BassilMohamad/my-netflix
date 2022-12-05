const initState={
  movie:{}
}

const DetailReduser=(state=initState,action)=>{
  switch(action.type){
    case "GET_DETAIL":
      return{
        ...state,
        movie:action.payload.movie
      }
      default:
      return{...state}
  }
}

export default DetailReduser