import React, {useEffect} from "react";
//import nav 
import Nav from "../components/Nav";
//import styled & motion 
import { motion } from "framer-motion";
import styled from "styled-components";
//import movies colections
import MoviesColections from "../components/MoviesColections";
//import use dispatch to fetch the games from the API 
import { useDispatch,useSelector } from "react-redux";
import loadMovie from "../actions/MovieAction"
//react slider 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Movies=()=>{
   const dispatch=useDispatch();
   useEffect(()=>{
    dispatch(loadMovie())
   },[dispatch])
   //get data back
    const {popular,best} =useSelector(state=>state.movies);
    //Slider settings
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      swipeToSlide: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 840,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return(
    <>
      <Nav />
      <Main> 
        <Info>
          <h1>Movies</h1>
          <div className="content">
            <p>Movies move us like nothing else can, whether they’re scary, funny,</p> <p>dramatic, romantic or anywhere in-between. So many titles, so much to </p> 
          <p>experience.</p>  
         </div>
        </Info>
        <h2>Popular On Netflix</h2>
        <MoviesSection>
            {popular && (
          <Slider {...settings} className="movieSection">
            {popular.map(movie=>
            <MoviesColections
            title={movie.title}
            image={movie.poster}
            key={movie.title}
            id={movie.ids.simkl_id} 
            />)}
          </Slider>
            )}
        </MoviesSection>
        <h2>Popular Animy On Netflix</h2>
        <MoviesSection>
        {best &&(
        <Slider {...settings} className="movieSection">
          {best.map(movies=>
          <MoviesColections
           title={movies.title}
           image={movies.poster}
           key={movies.ids.simkl_id}
           id={movies.ids.simkl_id} 
          />)}
          </Slider>
          )}
        </MoviesSection>
      </Main>
    </>
  )
}

const Main=styled(motion.div)`
  min-height: 90vh;
  background:#181818;
  color:white;
  position: relative;
  h2{
    margin: 0 0 1rem 4rem;
    opacity: 0.5;
    margin-top:2rem
  }
  overflow-x: hidden;
  .angle1,.angle2{
    color:red;
  }
`
const Info=styled(motion.div)`
  display: flex;
  flex-direction: column;
  width:90vh;
  margin-left: 4rem;
  h1{
    margin-top: 5rem;
    font-size: 4rem;
  }
  .content{
    margin:2.5rem 0 2.5rem 0rem;
    font-size: 1.1rem;
  }
  @media (max-width:650px){
    p{
      width:30rem;
      /* text-align: center; */
    }
    /* .content{
      text-align: center;
    } */
  }
`
const MoviesSection=styled(motion.div)`
  width:95%;
  .movieSection{
    margin-left: 4rem;
    display:flex;
  }
`

export default Movies;