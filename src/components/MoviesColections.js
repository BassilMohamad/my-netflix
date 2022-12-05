import React from "react";
//import styled and animation 
import styled from "styled-components";
import {motion} from "framer-motion";
//import dispatch action and dispatch
import {loadDetail} from "../actions/DetailMovie";
import { useDispatch } from "react-redux";
//react router
import { Link } from "react-router-dom";
//router
const MoviesColections=({title,image,id})=>{
  //load detail
  const dispatch=useDispatch();
  //handler
  const loadDetailHandler=()=>{
      dispatch(loadDetail(id))
  }
  return(
      <Link to="/MoviesDetail" style={{textDecoration: 'none',color:"white"}}>
        <Images onClick={loadDetailHandler}>
          <img src={`https://simkl.in/posters/${image}_m.jpg`}alt="MovieImage" />
        <p>{title}</p>
        </Images>
      </Link>
  )
}

const Images=styled(motion.div)`
  img{
    width:300px;
    height:170px;
    object-fit:cover;
    margin-right: 10rem;
  }
  p{
    margin-top:0.5rem;
    text-align: center;
  }
`


export default MoviesColections;