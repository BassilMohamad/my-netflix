import React from "react";
//import styled & motion 
import { motion } from "framer-motion";
import styled from "styled-components";
//import the link from the react reouter dom
import { Link } from "react-router-dom";
const Nav=()=>{
  return(
    <NavBar>
      <NavA>
        <Link to={"/"} id="logo">NETFLIX</Link>
        <ul>
          <p>UNLIMITED TV SHOWS & MOVIES</p>
          <li>
            <button>JOIN NOW</button>
          </li>
          <li>
            <button className="btn2">SIGN UP</button>
          </li>
        </ul>
      </NavA>
    </NavBar>
  )
}

const NavBar=styled(motion.div)`
  background: black;
  color: white;
`

const NavA=styled(motion.div)`
  min-height: 10vh;
  width:90%;
  margin:auto auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  #logo{
    font-size: 3rem;
    font-weight: bold;
    color:red;
    text-decoration: none;
    font-family: 'Bebas Neue', cursive;
  } 
  ul{
    list-style: none;
    display: flex;
    align-items: center;
    p{
      margin-right: 2rem;
    }
    li{
      button{
        background-color: red;
        padding:0.5rem 1rem;
        color:white;
        border-radius: 10px;
        margin-right: 2rem;
        cursor: pointer;
      }
      .btn2{
        background-color: transparent;
        border:1px solid white;
      }
    }
  }
  @media (max-width:624px){
   p{
    display: none;
   }
  }
`

export default Nav;