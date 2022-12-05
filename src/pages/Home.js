import React,{useEffect} from "react";
//Import Landing page
import LandingPage from "../components/LandingPage";
//import tje Movie Page 
import Movies from "./Movies";
import MoviesDetail from "../components/MovieDetail";
//React Router 
import { Route,Routes } from "react-router-dom";
//import movie detail 
import loadMovie from "../actions/MovieAction"
import { useDispatch } from "react-redux";
const Home=()=>{
  const dispatch=useDispatch();
   useEffect(()=>{
    dispatch(loadMovie())
   },[dispatch])
  return(
    <div className="home">
      <Routes> 
       <Route path="https://bassilmohamad.github.io/my-netflix/" exact element={<LandingPage />}/>
       <Route path="/movies" exact element={<Movies />}/>
       <Route path="/moviesDetail" exact element={<MoviesDetail />}/>
      </Routes>
  
    </div>
  )
}
export default Home;