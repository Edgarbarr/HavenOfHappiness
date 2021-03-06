import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Open Sans Condensed';
        
    }

    a {
        text-decoration: none;
        color: black;
    }

    *{
        box-sizing: border-box
    }
    .quick-announcement {
        width: 100%;
        background-color: pink;
        height: 35px;
        display: block;
        margin-bottom: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: underline;
        font-family: "Open Sans";
        font-size: small;
       
      }
      
      .footer {
        display: flex;
        position: relative;
        justify-content: space-evenly;
      
        width: 100%;
        height: 400px;
        background-color: rgb(221, 179, 179);
        padding: 0 25px;
        box-shadow: 20px 0 20px black;
        font-family: "Open Sans Condensed";
        margin-top: 25px;
        @media screen and (max-width: 800px){
            height: auto;
            padding: 0;
        }
        
      }
      
      .footer-category{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 20%;
      }
      .footer-list {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        list-style: none;
        padding: 0;
      }
      
      .footer-list li {
        margin: 10px 0;
      }
      .copyright {
        position: absolute;
        bottom: 0;
        left: 0;
      }
      
`