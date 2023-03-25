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
        font-family: "John Mayer" ;
        src: url("./src/fonts/JohnMayer.otf");
    }

    @font-face {
        font-family: "Futura" ;
        src: url("./src/fonts/FuturaPT.ttf");
    }
   
    a{
        text-decoration: none;
    }

    *{
        margin:0;
        padding:0;
        font-family: "Futura" , sans-serif;
        font-size: 1.075rem;
        text-decoration: none;
    }
    body{
        background-color: ${colors.background};
        color: ${colors.textColor};
    }`;