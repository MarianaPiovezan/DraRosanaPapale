import {createGlobalStyle} from "styled-components";

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
        font-family: "Chillax" ;
        src: url("./src/fonts/Chillax-Variable.ttf");
    }

    @font-face {
        font-family: "OpenSans" ;
        src: url("./src/fonts/OpenSans.ttf");
    }
   
    a{
        text-decoration: none;
    }

    *{
        margin:0;
        padding:0;
        font-family: "OpenSans" , sans-serif;
        font-size: 1rem;
        text-decoration: none;
    }
    body{
        background-color: ${colors.background};
        color: ${colors.textColor};
    }`;