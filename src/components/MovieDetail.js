import React from "react";
//import nav
import Nav from "./Nav";
//import styled components
import styled from "styled-components";
import { motion } from "framer-motion";
//redux 
import { useSelector } from "react-redux";
import { useRef } from "react";
const MoviesDetail=()=>{
  //data from redux
  const {movie}=useSelector(state=>state.detail);
  const refImg=useRef(null);
  return(
    <>
      <Nav />
      <Main>
        {movie.ratings &&(
          <Description>
            <h1>{movie.title}</h1>
            <h3>relesed: {movie.year} | moive rank: {movie.rank} | {movie.type} </h3>
            <p>{movie.overview}</p>
            <h4>Rating SKMIL: <span>{movie.ratings.simkl.rating} </span></h4>
            <h2>Watch all you want.</h2>
            <button className="btn">JOIN NOW</button>
          </Description>
        )}
          <img ref={refImg} src={`https://simkl.in/posters/${movie.poster}_m.jpg`}  alt="MovieImageDetail" />
      </Main>
    </>
  )
}

const Main=styled(motion.div)`
  color:white;
  width:90%;
  min-height: 90vh;
  margin:auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img{
    margin-top:3rem;
    flex:2;
    align-self: flex-start;
    max-width:30rem;
    height: 35rem;
    margin-left:7rem;
    object-fit: cover;
  }
  
  @media (max-width:984px){
   img{
    max-width:15rem;
    height: 20rem;
    margin-top:15rem;
   }
  }
  @media (max-width:600px){
    display:block;
    img{
      max-width:30rem;
      height: 35rem;
      margin-top:2rem;
      margin-left:1rem
    }
  }
`
const Description=styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60vh;
  flex:1;
  h1{
    font-size: 3rem;
  }
  h3{
    opacity: 0.6;
  }
  button{
    cursor: pointer;
    width:25rem;
    padding:1rem 2rem;  
    border:none;
    background: #E0403B;
    color:white;
    font-size: 1rem;
  }
 .btn:hover{
  background: red;
 }
 span{
  opacity: 0.6;
 }
`

export default MoviesDetail;