import React from "react";
//import Styles And Animation 
import { motion } from "framer-motion";
import styled from "styled-components";
//import images
import cover from "../images/LandingPage.jpg";
//import Link from the react-router-dom to navigate the btn to movie section 
import { Link } from "react-router-dom";

const LandingPage=()=>{
  return(
    <Main>
      <img src={cover} alt="LandingPage" />
      <Content>
        <Nav>
          <h1 id="logo">NETFLIX</h1>
          <ul>
            <li className="join">JOIN NOW</li>
            <li className="sign">SIGN UP</li>
          </ul>
        </Nav>
        <Description>
          <Text>
          <h1>Unlimited movies, TV </h1>
          <h1 className="show">shows, and more.</h1>
          <h3>Watch anywhere. Cancel anytime.</h3>
          <p>Ready to watch? Enter your email to create or restart your membership.</p>
          </Text>
          <Link className="button" to ="/movies">Explore Now</Link>
        </Description>
      </Content>
    </Main>
  )
}

//styls

const Main=styled(motion.div)`
  min-height:100vh;
  display: flex;
  img{
    width:100%; 
    max-height: 100vh;
    object-fit: cover;
    filter: brightness(0.3);
  }
  position: relative;
`
const Content=styled(motion.div)`
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height: 100%;
`
const Nav=styled(motion.div)`
  min-height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 2rem;
  #logo{
    color:#FF0000;
    font-family: 'Bebas Neue', cursive;
    font-size: 60px;
    cursor: pointer;
    flex:1
  }
 ul{
  display: flex;
  list-style: none;
  li{
    color:white;
    margin-right:2rem;
    padding:0.5rem 1rem;
    cursor: pointer;
  }
  .join{
    background-color: red;
  }
  .sign{
    background-color: black;
    border:1px solid white
  }
  @media (max-width:450px){
    ul{
      flex:1
    }
   li{
    font-size:0.8rem;
   }
   h1{
    margin:0 0.5rem 0rem 0.5rem;
    font-size:50%;
   }
  
  }
}
`
const Description=styled(motion.div)`
  display: flex;
  min-height: 70vh;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .button{
    padding:1rem 2rem;
    background: red;
    border:none;
    color:white;
    font-size: 1.2rem;
    font-weight: bold;
    margin-top:-5rem;
    cursor: pointer;
    text-decoration: none;
  }
  margin-top: 6rem;
`
const Text=styled(motion.div)`
  color:white;
  text-align: center;
  h1{
    font-size: 4rem;
  }
  .show{
    text-align: center;
  }
  h3{
    font-size: 1.8rem;
    padding:2rem 0rem 2rem 0rem;
    text-align: center;
  }
  p{
    font-size:1rem;
    text-align: center;
  }
  @media (max-width:450px){
   h1,h3,p{
    margin:0rem 1rem 0rem 1rem;
   }
  }
`

export default LandingPage;