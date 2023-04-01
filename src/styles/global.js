import {createGlobalStyle} from "styled-components";
import title from "../src/fonts/JohnMayer.woff";
import text from"./src/fonts/FuturaPT.woff";

export const colors = {
  primary: "#FF8189",
  secondary: "#00B2E3",
  textColor: "#636569",
  background: "#F6F6F7",
  backgroundAlt: "#E3F0F4",
  backgroundSecundary: "#fff",
  desability: "#a1a1a1"
};


export const GlobalStyle = createGlobalStyle`

@font-face {
        font-family: "John Mayer";
        src: local("John Mayer"), url(${title}) format("woff");
        font-style: normal;
    }

    @font-face {
        font-family: "Futura";
        src: local("Futura"), url(${text}) format("woff");
        font-style: normal;

    }

    :root{
      --title: "John Mayer", sans-serif;
      --text: "Futura" , sans-serif;

    }
   
    a{
        text-decoration: none;
    }

    *{
        margin:0;
        padding:0;
        font-family: var(--text);
        font-size: 1.025rem;
        letter-spacing: 0.8px;
        text-decoration: none;
    }
    body{
        background-color: ${colors.background};
        color: ${colors.textColor};
    }`;