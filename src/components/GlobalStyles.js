import { createGlobalStyle } from "styled-components";

const GlobalStyles=createGlobalStyle`
  
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }
  body{
    font-family: 'Inter', sans-serif;
    background: #181818;
  }
  html{
    @media (max-width:840px){
      font-size: 75%;
      h1{
        font-size:1rem
      }
    }
  }
  .slick-slide > div{
    margin:10px;
  }

`
export default GlobalStyles