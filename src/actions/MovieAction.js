import axios from "axios";
// import the URL 
import {MovieURL,bestShowsURL} from "../API";
  
const loadMovie=()=> async (dispatch)=>{
  //Fetch Axios
  const moviesData=await axios.get(MovieURL());
  const bestMoviesData=await axios.get(bestShowsURL());
  dispatch({
    type:"FETCH_MOVIE",
    payload:{
      popular:moviesData.data,
      best:bestMoviesData.data
    }  
  })
}
export default loadMovie